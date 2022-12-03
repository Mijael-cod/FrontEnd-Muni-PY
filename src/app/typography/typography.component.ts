import { Component, OnInit } from '@angular/core';
import { Solicitudes } from 'app/modelo/Solicitudes';
import { ServiceService } from 'app/Service/service.service';
import { data } from 'jquery';



@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  solicitudes:Solicitudes[];
  constructor( private service: ServiceService) { }

  ngOnInit() {
    this.service.getSolicitudes()
    .subscribe(data =>{
      this.solicitudes = data;
      console.log()
    })
  }

}
