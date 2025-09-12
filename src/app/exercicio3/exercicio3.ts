import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Questao = { enunciado:string; opcoes:string[]; correta:number; marcada?:number };

@Component({
  selector: 'app-exercicio3',
  imports: [FormsModule],
  templateUrl: './exercicio3.html',
  styleUrl: './exercicio3.css'
})
export class Exercicio3 {
  questoes: Questao[] = [
    { enunciado: '2 + 2 = ?', opcoes: ['3','4','5'], correta: 1 },
    { enunciado: 'Capital do Brasil?', opcoes: ['Rio','Brasília','SP'], correta: 1 },
    { enunciado: 'Angular é um…', opcoes: ['framework','banco','SO'], correta: 0 },
    { enunciado: 'Cor do céu (dia claro)?', opcoes: ['Azul','Verde','Vermelho'], correta: 0 },
    { enunciado: '3 * 3 = ?', opcoes: ['6','8','9'], correta: 2 }
  ];

  getPontuacao(){ return this.questoes.filter(q => q.marcada === q.correta).length; }
  finalizado(){ return this.questoes.every(q => q.marcada !== undefined); }
}
