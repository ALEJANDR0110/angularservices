import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";

@Injectable()
export class ServiceComics {

    getComics(): Promise<Array<Comic>> {
        let path = "./assets/comics.json";

        return fetch(path).then(response => response.json())
        .then((data: any[]) => {
            let arrayComics = []
            for(let elem of data) {
                //creamos un comic de Angular
                let comic: Comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
                arrayComics.push(comic);
            }
            console.log(arrayComics)
            return arrayComics;
        })
    }
    //HACE LO MISMO QUE LA FUNCION DE ARRIBA, SOLO CAMBIA LA SINTAXIS DE LA PROMISE
    async getComicsAsync(): Promise<Array<Comic>> {
        let path = "./assets/comics.json";
        let response = await fetch(path);
        let data = await response.json();
        let arrayComics = [];

        for(let elem of data) {
            let comic: Comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
            arrayComics.push(comic);
        }
        console.log(arrayComics)
        return arrayComics;
    }
}