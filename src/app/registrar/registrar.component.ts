import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2'

import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Guardar2(){
    Swal.fire(
      'Se registro con éxito',
      '',
      'success'
    )

  }

}
