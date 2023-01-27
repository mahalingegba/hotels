import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ListrestoService {
 url="http://localhost:3000/restaurants";
 rootUrl="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  getListRest(){
   return this.http.get(this.url);
}
saveResto(data){
  return this.http.post(this.url,data);
}
deleteResto(id){
  return this.http.delete(`${this.url}/${id}`);
}

getCurrentRest(id){
  return this.http.get(`${this.url}/${id}`)
}
updateRestoDetails(id,data){
  return this.http.put(`${this.url}/${id}`,data)
}


//users add
registerUsers(data){
  return this.http.post(this.rootUrl+"users",data)
}
}
