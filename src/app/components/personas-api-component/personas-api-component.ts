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

  async ngOnInit(): Promise<void> {
    //ESTO ES UNA FORMA DE HACERLO
    try{
      this.personas= await this._service.getPersonasAsync();
      this._cdr.detectChanges();
    }catch(error) {
      console.log("Error en el Api", error)
    }
    
    /*
    //ESTO ES OTRA FORMA DE HACERLO
    this._service.getPersonasPromise().then((response) => {
      this.personas = response;
      this._cdr.detectChanges();
    }).catch((error: any) => {
      console.log("Error en el Api", error)
    })
    */

    //SI DEVOLVEMOS UN Observable, CON LA PETICION, NOS SUBSCRIBIMOS
    //A SU PROMESA
    //ESTA ES OTRA FORMA
    /*
    this._service.getPersonas().subscribe({
      next: (response) => {
        this.personas = response;
        this._cdr.detectChanges();
      }, error: (error) => {
        console.log("Error en el Api", error)
      }
    })
    */
  }
}
