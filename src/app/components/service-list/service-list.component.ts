import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Service} from './../../models/service';

import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  constructor(private router: Router, private serviceSer:ServiceService) { }

  servicios:Service[] =[];
  ngOnInit(): void {
    this.getServices();
  }

  gotoUpdate(id: string){
    //this.router.navigate(['/update-evento', id]);
  }

  getServices(){
    this.servicios = this.serviceSer.services;
    console.log(this.servicios)

    /*this.serviceSer.getServices()
      .subscribe(res =>{
        this.eventos = res;
      }, err => console.log(err))*/
      
  }
  deleteService(id: string){
    this.serviceSer.deleteService(id)
      .subscribe(res => {
           this.getServices();
      }, err => console.log(err))
      /*.subscribe(res =>{
        this.eventos = res;
      }, err => console.log(err))*/
  }
}
