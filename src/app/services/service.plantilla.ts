import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Plantilla } from "../models/plantilla";

@Injectable()
export class ServicePlantilla {
    constructor(
        private _http: HttpClient
    ){}

    async getFunciones(): Promise<Array<string>> {
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/funciones"
        console.log(url + request)
        return firstValueFrom(this._http.get<Array<string>>(url + request))
    }

    async getPlantilla(func: string): Promise<Array<Plantilla>> {
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/plantillafuncion/" + func

        return firstValueFrom(this._http.get<Array<Plantilla>>(url + request))
    }

    async getPlantillaFunciones(funciones: Array<string>): Promise<Plantilla[]> {
        //funcion=Enfermera&funcion=Enfermero 
        let content = "";
        for(let fun of funciones) {
            content += "funcion=" + fun + "&";
        }
        content = content.substring(0, content.length - 1);
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/plantillafunciones?" + content;
        return firstValueFrom(this._http.get<Plantilla[]>(url + request))
    }
}