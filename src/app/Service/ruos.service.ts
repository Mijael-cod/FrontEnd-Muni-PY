import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRuos } from 'app/interfaces/Ruos.interface';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class RequisitoService {
    requisito = 'http://localhost:8090/api/ruos/listar';
    constructor(private httpClient: HttpClient) { }
    public requisitos(): Observable<any> {
        return this.httpClient.get(this.requisito);
}

public login(iRuos: IRuos): Observable<any> {
    return this.httpClient.post<any>(this.requisito , iRuos);
  }
}



