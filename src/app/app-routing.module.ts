import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'', redirectTo:'product', pathMatch:'full'},
  {path:'product', component:ProductListComponent},
  {path:'product/new', component:ProductAddComponent},
  {path:'product/:id', component:ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
