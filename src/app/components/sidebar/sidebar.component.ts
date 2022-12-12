import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Principal A.',  icon: 'dashboard', class: '' },
   
    { path: '/user-profile', title: 'Registrar OS',  icon:'person', class: '' },
    { path: '/table-list', title: 'Actualizar OS',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Solicitudes',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Registrar Personal',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Listar Usuarios',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Listar JA',  icon:'notifications', class: '' },
    { path: '/genexp', title: 'Generar Expediente', icon:'library_books', class:''},
    { path: '/verificarexpe', title: 'Verificar Expediente', icon:'library_books', class:''},
    { path: '/resolucion', title: 'Resoluciones', icon: 'location_on', class:''}
    

    
];  

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
