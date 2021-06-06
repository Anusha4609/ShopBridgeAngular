import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
import { ShopBridgeService } from '../Service/shop-bridge-service.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../Model/Category';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {
  myForm: FormGroup;
  productmodel = new Product();
  id : number;
  categorylist: Category[]
  constructor(private productservice: ShopBridgeService, private fb: FormBuilder, private router:Router,private activatedroute:ActivatedRoute)  { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      category_id: ['', Validators.required]

     });

     this.id= parseInt(this.activatedroute.snapshot.paramMap.get('id'))
     
   
    if(this.id){
      this.productservice.getSingleProduct(this.id).subscribe(
        data=>{
            
          this.productmodel.name = data.body.name
          this.productmodel.description = data.body.description
          this.productmodel.price = data.body.price
          this.productmodel.quantity = data.body.quantity
          this.productmodel.category_id = data.body.category.id


          this.myForm.setValue(this.productmodel)
        }
      )
    }
    this.getCategory()
  }

  getCategory() {
    this.productservice.getCategory().subscribe(
      data => {
        if (data.status == 200) {
          this.categorylist = data.body
        }
      },
      error=>{
        alert("Error")
      }
    )
  }



  onSubmit(form: FormGroup) {
    if(!this.id){
    this.productservice.postProduct(form.value).subscribe(
      data => {
        if (data.status == 201) {
          this.router.navigate(["product"]);
        }
      },
      error=>{
        alert("Error")
      }
    )
  }
  else{
    let product = new Product()
    product.name = form.value.name
    product.description = form.value.description
    product.price = form.value.price
    product.quantity = form.value.quantity
    product.category_id = form.value.category_id
    product.id = this.id
    


    this.productservice.putProduct(product).subscribe(
      data=>{
        if(data.status== 200){
          this.router.navigate(['product'])
        }
      },
      error=>{
        alert("Error")
      }
    )
  }

}}
