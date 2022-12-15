import { Component, OnInit } from '@angular/core';
import { Solicitudes } from 'app/modelo/Solicitudes';
import { ServiceService } from 'app/Service/service.service';
import { RequisitoService } from 'app/Service/organizacion.service';
import { data } from 'jquery';



@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  solicitudes:Solicitudes[];
  
  repost: any;

  constructor( private service: ServiceService,
    private organizacion: RequisitoService) { }

  

  ngOnInit() {
    this.organizacion.requisitos()
    .subscribe(data =>{
      this.repost = data;
      console.log(this.repost)
    })
  }

}
