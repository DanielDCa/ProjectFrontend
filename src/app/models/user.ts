import {Service} from './service'
export class User{
    _id?: number;
    email: string;
    password: string;
    username: string;
    time: number;
    services:Service[] = [];

    constructor(email: string, password: string, username:string, time:number){
        this.email = email;
        this.password = password;
        this.username = username;
        this.time = time;
    }
}
