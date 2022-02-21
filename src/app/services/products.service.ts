import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product, CreateProductDTO, UpdateProductDTO} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private httpCliente: HttpClient
  ) { }

  getAllProducts(limit?: number, offset?:number){
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.httpCliente.get<Product[]>(this.apiUrl, {params});
  }

  getProduct(id: string){
    return this.httpCliente.get<Product>(`${this.apiUrl}/${id}`)
  }

  getProductsByPage(limit: number, offset:number){
    return this.httpCliente.get<Product[]>(`${this.apiUrl}`, {
      params: {limit,offset}
    })
  }

  create(dto: CreateProductDTO){
    return this.httpCliente.post<Product>(this.apiUrl, dto);
  }

  update(id: string, dto: UpdateProductDTO){
    return this.httpCliente.put<Product>(`${this.apiUrl}/${id}`, dto);
  }


  delete(id: string){
    return this.httpCliente.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
