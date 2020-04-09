import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoId = 0;
  nome = 'alex';
  funcionarios = [];
  // aula 9.12 com esse metodo podemos dar o alerta que foi adicionado
  // adicionado = false;
  //  this.adicionado = true;
  // e no app.componente.html colocamos role="alert" *ngIf="adicionado">
  adicionado = false;


  adicionar(nome: string) {
    // this.nome = nome;
    console.log(`Adicionando ${this.nome}`);
     this.adicionado = true;
      this.funcionarios.push({
        id: ++this.ultimoId,
        nome: this.nome
      });
  
  }


}
