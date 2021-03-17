import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const api_url = 'https://602b913bef26b40017f146ae.mockapi.io/api/v1'
// const api_url = 'http://58.82.170.202:3000'

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private http: HttpClient
  ) { }

  GetAllWarehouse(data: any) {
    // return this.http.post(`${api_url}/WarehouseManageRouters/GetAllWarehouse`, data).toPromise()
    return this.http.get(`${api_url}/warehouse`, data).toPromise()
  }

  getByID(id: any) {
    return this.http.get(`${api_url}/warehouse/${id}`).toPromise()
  }

  create(data: any) {
    return this.http.post(`${api_url}/warehouse`, data).toPromise()
  }

  update(data: any, id: any) {
    return this.http.put(`${api_url}/warehouse/${id}`, data).toPromise()
  }

  delete(id: any) {
    return this.http.delete(`${api_url}/warehouse/${id}`).toPromise()
  }
}
