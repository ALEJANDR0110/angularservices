import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServiceComics } from '../../services/service.comics';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit {
  public arrayComics!: Array<Comic>;

  constructor(
    private _cdr: ChangeDetectorRef, 
    private _service: ServiceComics
  ) {}

/***
  ngOnInit(): void {
    this._service.getComics().then(data => {
      this.arrayComics = data;
      this._cdr.detectChanges();
    });
  }
***/

//HACE LO MISMO QUE LA FUNCION DE ARRIBA, SOLO CAMBIA LA SINTAXIS
//COMO SE RECIBE A LA PROMESA
  async ngOnInit(): Promise<void> {
    this.arrayComics = await this._service.getComicsAsync();
  this._cdr.detectChanges();
  }
}
