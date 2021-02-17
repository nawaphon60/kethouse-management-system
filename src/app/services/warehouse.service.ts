import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const api_url = 'https://602b913bef26b40017f146ae.mockapi.io/api/v1'

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${api_url}/warehouse`).toPromise()
  }

  create(data: any) {
    return this.http.post(`${api_url}/warehouse`, data).toPromise()
  }

  update(data: any, id: any) {
    return this.http.put(`${api_url}/warehouse/${id}`, data).toPromise()
  }
}
