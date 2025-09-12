import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Produto = { nome: string; qtd: number; preco: number };

@Component({
  selector: 'app-exercicio2',
  imports: [FormsModule],
  templateUrl: './exercicio2.html',
  styleUrl: './exercicio2.css'
})
export class Exercicio2 {
  produtos: Produto[] = [
    { nome: 'Caderno', qtd: 3, preco: 15 },
    { nome: 'Caneta', qtd: 10, preco: 3.5 }
  ];

  novo: Produto = { nome: '', qtd: 1, preco: 0 };

  add() {
    if (!this.novo.nome)
      return;
    this.produtos.push({ ...this.novo });
    this.novo = { nome: '', qtd: 1, preco: 0 };
  }

  remover(i: number) {
    this.produtos.splice(i, 1);
  }

  getTotal(): number {
    return this.produtos.reduce((s, p) => s + p.qtd * p.preco, 0);
  }
}
