import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mutiplicaPor'
})
export class MutiplicaPorPipe implements PipeTransform {

  transform(valor: number, mutiplicador: number): unknown {
    return valor * mutiplicador;
  }

}
