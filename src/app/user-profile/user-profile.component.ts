import { Component, OnInit } from '@angular/core';
import { Solicitudes } from 'app/modelo/Solicitudes';
import { ServiceService } from 'app/Service/service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  

  constructor(private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar2(){
    Swal.fire(
      'Se registro con éxito',
      '',
      'success'
    )

  }

  Guardar(solicitud:Solicitudes){
    this.service.createSolicitud(solicitud)
    .subscribe(data => {
      alert("Se agrego con éxtio !!!");
      
    })

  }

}
