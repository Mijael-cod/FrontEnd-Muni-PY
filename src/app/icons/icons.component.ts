import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Guardar2(){
    Swal.fire(
      'Se registro con éxito',
      '',
      'success'
    )

  }

}
