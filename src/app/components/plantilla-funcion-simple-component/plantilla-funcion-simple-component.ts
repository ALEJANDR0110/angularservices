import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-simple-component.css',
  templateUrl: './plantilla-funcion-simple-component.html',
})
export class PlantillaFuncionSimpleComponent implements OnInit{
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
    let funcion = this.selectFunc.nativeElement.value
    this.arrayPlantilla = await this._service.getPlantilla(funcion);
    this._cdr.detectChanges();
  }
}
