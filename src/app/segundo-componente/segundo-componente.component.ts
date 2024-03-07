import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent{
  nome = "João";
  dataNascimento = "1992-02-26";
  urlImagem = "/assets/iago3.jpg";

  mostrarDataNascimento() {
    alert("A data de nascimento do Iago é: " + this.dataNascimento);
  }
}