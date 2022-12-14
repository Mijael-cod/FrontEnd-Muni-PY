import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';

import { Usuario } from '../models/Usuario.model';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    
    this.authService.login(this.usuario).subscribe({
      next: (resp: any) => {
        // Get Token
        let token: string = resp.headers.get('Authorization');
        this.authService.getPayloadToken(token);
        // Obtener solo el token y quitar el Bearer
        token = token.replace('Bearer ', '')
        localStorage.setItem('token', token)
        this.router.navigate(['dashboard']);
        
        Swal.fire(
          'Bienvenido!',
          'Al sistema..!',
          'success'
        )
      },
      error: (err) => {
        console.log(err);
        Swal.fire(
          'Error!',
          'Cuenta incorrecta..!',
          'error'
        )
        
      }
      
    })

  }

}
