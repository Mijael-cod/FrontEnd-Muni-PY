import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solicitudes } from 'app/modelo/Solicitudes';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/solicitud';

  getSolicitudes(){
    return this.http.get<Solicitudes[]>(this.Url);
  }
  createSolicitud(solicitud:Solicitudes){
    return this.http.post<Solicitudes>(this.Url,solicitud);

  } 
}
