import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Pessoa = { nome:string; idade:number; cidade:string };

@Component({
  selector: 'app-exercicio7',
  imports: [FormsModule],
  templateUrl: './exercicio7.html',
  styleUrl: './exercicio7.css'
})
export class Exercicio7 {
  filtro = ''; ordem: 'nome' | 'idade' = 'nome';
  dados: Pessoa[] = [
    { nome:'Ana', idade:22, cidade:'Campinas' },
    { nome:'Bruno', idade:30, cidade:'São Paulo' },
    { nome:'Carla', idade:27, cidade:'Sorocaba' }
  ];
  get exibicao(){
    return this.dados
      .filter(p => p.nome.toLowerCase().includes(this.filtro.toLowerCase()))
      .sort((a,b) => this.ordem==='nome' ? a.nome.localeCompare(b.nome) : a.idade - b.idade);
  }
  ordenarPor(c:'nome'|'idade'){ this.ordem = c; }
}
