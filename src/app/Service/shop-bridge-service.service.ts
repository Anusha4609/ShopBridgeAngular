import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ShopBridgeService {

  rootURL = "http://127.0.0.1:8000/api/"

  constructor(public http: HttpClient) { }

  public getProduct():Observable<any>{
    return this.http.get(this.rootURL+'ProductAPI/', {observe:'response'})
  }

  public postProduct(model):Observable<any>{
    return this.http.post(this.rootURL+'ProductAPI/', model, {observe:'response'})
  }

  public deleteProduct(model):Observable<any>{
    return this.http.delete(this.rootURL+'ProductAPI/'+model.id, {observe:'response'})
  }

  public getCategory():Observable<any>{
    return this.http.get(this.rootURL+'CategoryAPI', {observe:'response'})
  }

  public getSingleProduct(productid):Observable<any>{
    return this.http.get(this.rootURL+'ProductAPI/'+productid, {observe:'response'})
  }

  public putProduct(model):Observable<any>{
    return this.http.put(this.rootURL+'ProductAPI/'+model.id+'/', model, {observe:'response'})
  }
}
