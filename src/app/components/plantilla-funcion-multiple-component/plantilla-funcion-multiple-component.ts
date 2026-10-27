import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-multiple-component.css',
  templateUrl: './plantilla-funcion-multiple-component.html',
})
export class PlantillaFuncionMultipleComponent implements OnInit{
  public arrayfunciones!: Array<string>;
  public arrayPlantilla!: Array<Plantilla>;
  @ViewChild("selectFunc") selectFunc!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePlantilla
  ){}

  async ngOnInit(): Promise<void> {
    this.arrayfunciones = await this._service.getFunciones();
    this._cdr.detectChanges();
  }

  async mostrarPlantilla(): Promise<void> {
    let aux = [];
    //el control html select tiene una propiedad options
    for(let opcion of this.selectFunc.nativeElement.options) {
      if(opcion.selected == true) {
        aux.push(opcion.value)
      }
    }
  
    this.arrayPlantilla = await this._service.getPlantillaFunciones(aux);
    this._cdr.detectChanges();
  }
}
