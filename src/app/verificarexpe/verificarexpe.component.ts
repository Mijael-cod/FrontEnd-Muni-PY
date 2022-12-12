import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-verificarexpe',
  templateUrl: './verificarexpe.component.html',
  styleUrls: ['./verificarexpe.component.css']
})
export class VerificarexpeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Guardar2(){
    Swal.fire(
      'Se registro con éxito',
      'Se registro el COD de Organización',
      'success'
    )

  }

}
