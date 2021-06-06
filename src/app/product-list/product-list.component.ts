import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
import { ShopBridgeService } from '../Service/shop-bridge-service.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productlist: Product[]=[]
  productmodel = new Product
  page=1
  pageSize =5

  constructor(private productservice: ShopBridgeService) {
    this.getProduct();
  }



  ngOnInit(): void {}

  getProduct() {
    this.productservice.getProduct().subscribe(
      data => {
        if (data.status == 200) {
          this.productlist = data.body
        }
      },
      error=>{
        alert("Error")
      }
    )

  }

  
  deleteProduct(productmodel) {
    this.productservice.deleteProduct(productmodel).subscribe(
      data => {
        if (data.status == 204) {
          this.getProduct()
        }
      },
      error=>{
        alert("Error")
      }

    )
  }
  
}
