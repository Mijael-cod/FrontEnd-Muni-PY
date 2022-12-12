import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-genexp',
  templateUrl: './genexp.component.html',
  styleUrls: ['./genexp.component.css']
})
export class GenexpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Guardar2(){
    Swal.fire(
      'Se registro con éxito',
      'Se genero el Nro Expediente',
      'success'
    )

  }

}
