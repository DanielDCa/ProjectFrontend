import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URI= 'http://localhost:4000/api/users'
  constructor(private http: HttpClient) { }

  //Añadiendo algunos usuarios
  users:User[]=[
    new User("carlos@upc.edu","chachacha","carlitosxD",0),
    new User("mariana@upc.edu","mariiiiii","marilinda",0),
    new User("pepe@upc.edu","parampara","marilinda",0),
  ];

  addUser(user: User){

    this.users.push(user);
    console.log(this.users);

  }
  /*getUser(username: string){
    for (let user of users) { 

    }
  }*/

  //Funciones al conectar con Backend

  signUpUser(email:string,password:string,username:string,time:number){
    
    return this.http.post(this.URI,{email,password,username,time});

  }
  LoginUser(id: string){
    return this.http.get<User>(this.URI+"/"+id);
  }


}
