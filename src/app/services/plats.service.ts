import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {

  constructor(private http:HttpClient) { }

  platsURL :string = 'http://localhost:3000/Plats'
 
  getAllPlat(){
    return this.http.get<{ table :any}>(this.platsURL )
  }
  getPlatByID(id:any){
    return this.http.get<{plat:any}>(`${this.platsURL}/${id}`)
  }
  addPlat(object:any){
    return this.http.post<{msg:string}>(this.platsURL , object)
  }
  EditPlat(object:any){
    return this.http.put<{isUpdated:string}>(this.platsURL , object)
  }
  deletePlat(id:any){
    return this.http.delete<{isDleted:string}>(`${this.platsURL}/${id}`)
  }
  searchPlat(object:any){
    return this.http.post<{searchTab:any}>(`${this.platsURL}/search`,object)
  }
}
