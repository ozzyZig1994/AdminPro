import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  //@Input () progreso : number = 50;
  @Input ('valorEntrada') progreso : number = 50;
  @Input () btnClass : string = 'btn-primary';

  @Output ('valorSalida') valorSalida : EventEmitter<number> = new EventEmitter ();

  get getPorcentaje () {
    return `${ this.progreso }%`;
  }

  cambiarValor (valor : number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit (100);
      return this.progreso = 100;
    }
    
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit (0);
      return this.progreso = 0;
    }

    this.valorSalida.emit (this.progreso + valor);
    return this.progreso = this.progreso + valor;
  }

  onChange (nuevoValor : number) {
    this.progreso = nuevoValor >= 100 ? 100 : nuevoValor <= 0 ? 0 : nuevoValor;
    this.valorSalida.emit (this.progreso);
  }

}
