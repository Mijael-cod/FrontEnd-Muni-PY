import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-resolucion',
  templateUrl: './resolucion.component.html',
  styleUrls: ['./resolucion.component.css']
})
export class ResolucionComponent implements OnInit {

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
