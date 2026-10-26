import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas {
    //debemos recibir el objeto de la clase HttpClient en el constructor
    constructor(
        private _http: HttpClient
    ) {}

    //TENEMOS DOS OPCIONES PARA TRABAJAR.
    //DEVOLVER UNA PETICION O DEVOLVER UNA PROMESA
    //DEVOLVEMOS LA PETICION A LA LLAMADA UTILIZANDO Observable
    getPersonas(): Observable<any> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(urlApi);
    }
}