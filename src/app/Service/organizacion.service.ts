import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrganizacion } from 'app/interfaces/Organizacion.interface';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class RequisitoService {
    requisito = 'http://localhost:8090/api/organizacion/listar';
    constructor(private httpClient: HttpClient) { }
    public requisitos(): Observable<any> {
        return this.httpClient.get(this.requisito);
}

public login(iOrganizacion: IOrganizacion): Observable<any> {
    return this.httpClient.post<any>(this.requisito , iOrganizacion);
  }
}



