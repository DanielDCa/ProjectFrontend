import { Injectable } from '@angular/core';
import { Service } from '../models/service';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

   URI= 'http://localhost:4000/api/service'
  constructor(private http: HttpClient) { }

  //  _id?: number;
  //   username: string;
  //   description: string;
  //   time_cost: number;
  //   categories:[]
  services:Service[]=[
    new Service("carlos@upc.edu","Tocar piano",2,["Musica","Instrumento"]),
    new Service("carlos@upc.edu","Tocarte a ti bebe",1,["Musica","Instrumento"])
  ];
  
  getServices(username:string){
    
    return this.http.get<Service[]>(`${this. URI}/${username}`);

  }

  updateService(id:string,time_cost:number,categories:string[]){
    return this.http.put(`${this.URI}/${id}`,{time_cost,categories})
  }

  deleteService(id: string){
    console.log("Servicio eliminado"+id);
    return this.http.delete(`${this. URI}/${id}`);
  }
}
