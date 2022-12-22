import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-olvidarcontra4',
  templateUrl: './olvidarcontra4.component.html',
  styleUrls: ['./olvidarcontra4.component.css']
})
export class Olvidarcontra4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Guardar(){
    Swal.fire(
      'Se ha guardado con éxito',
      '',
      'success'
    )


  }
}
