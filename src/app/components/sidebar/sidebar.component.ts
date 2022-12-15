import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    roles: string[];
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Principal A.',  icon: 'dashboard', class: '' , roles:['ADMIN_ROLE','USER_ROLE','MESAPARTES_ROLE'] },
   
    { path: '/user-profile', title: 'Registrar OS',  icon:'person', class: '' , roles:['ADMIN_ROLE','USER_ROLE']},
    { path: '/table-list', title: 'Actualizar OS',  icon:'content_paste', class: '' , roles:['ADMIN_ROLE','USER_ROLE']},
    { path: '/typography', title: 'Solicitudes',  icon:'library_books', class: '' , roles:['ADMIN_ROLE','USER_ROLE']},
    { path: '/icons', title: 'Registrar Personal',  icon:'bubble_chart', class: '' , roles:['ADMIN_ROLE']},
    { path: '/maps', title: 'Listar Usuarios',  icon:'location_on', class: '' , roles:['ADMIN_ROLE']},
    { path: '/notifications', title: 'Listar JA',  icon:'notifications', class: '' , roles:['ADMIN_ROLE']},
    { path: '/genexp', title: 'Generar Expediente', icon:'library_books', class:'', roles:['ADMIN_ROLE','MESAPARTES_ROLE']},
    { path: '/verificarexpe', title: 'Verificar Expediente', icon:'library_books', class:'', roles:['ADMIN_ROLE']},

    { path: '/resolucion', class:'', title:'Resoluciones', icon:'library_books' , roles:['ADMIN_ROLE']},
    
    

    
];  



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  usuario:any;

  constructor() {
    
   }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.usuario=JSON.parse(localStorage.getItem('usuarioLogged'));
    console.log(this.usuario);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };



}
