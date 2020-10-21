import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  livros = [
    { titulo: '100 Sonetos de Amor', id: '001', autor: 'Pablo Neruda', paginas:200 },
    { titulo: 'Os Miseraveis', id: '002', autor: 'Victor Hugo', paginas:1500 },
    { titulo: 'O Caderno de Maya', id: '003', autor: 'Isabel Allende', paginas:350 },

  ]; //[]; indica lista

  cadastrar(t: string, i: string, a: string, p: number){
    this.livros.push({ titulo:t, id: i, autor:a, paginas: p});

  }

}
