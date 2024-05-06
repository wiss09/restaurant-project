import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ChefsService {
chefsURL :string = 'http://localhost:3000/chefs'
  constructor(private http : HttpClient ) { }
  getAllChef(){
    return this.http.get<{ table :any}>(this.chefsURL )
  }
  getChefByID(id:any){
    return this.http.get<{chef:any}>(`${this.chefsURL}/${id}`)
  }
  addChef(object:any){
    return this.http.post<{msg:string, newChef:any}>(this.chefsURL , object)
  }
  EditChef(object:any){
    return this.http.put<{ msg:string }>(this.chefsURL , object)
  }
  deleteChef(id:number){
    return this.http.delete<{ isDeleted: boolean }>(`${this.chefsURL}/${id}`)
  }
}
