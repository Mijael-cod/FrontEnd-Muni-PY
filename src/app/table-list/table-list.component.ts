import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

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
