import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit{
  public personas!: Array<Persona>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePersonas
  ) {}

  ngOnInit(): void {
    //SI DEVOLVEMOS UN Observable, CON LA PETICION, NOS SUBSCRIBIMOS
    //A SU PROMESA
    this._service.getPersonas().subscribe((response) => {
      console.log("Leyendo Personas");
      this.personas = response;
      this._cdr.detectChanges();
    })
  }
}
