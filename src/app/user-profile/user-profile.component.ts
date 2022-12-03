import { Component, OnInit } from '@angular/core';
import { Solicitudes } from 'app/modelo/Solicitudes';
import { ServiceService } from 'app/Service/service.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(solicitud:Solicitudes){
    this.service.createSolicitud(solicitud)
    .subscribe(data => {
      alert("Se agrego con éxtio !!!");
      
    })

  }

}
