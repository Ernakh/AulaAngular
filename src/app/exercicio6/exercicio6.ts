import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Produto = { id:number; nome:string; preco:number };
type Item = { prod:Produto; qtd:number };

@Component({
  selector: 'app-exercicio6',
  imports: [FormsModule],
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.css'
})
export class Exercicio6 {
  produtos: Produto[] = [
    { id:1, nome:'Mouse', preco:50 },
    { id:2, nome:'Teclado', preco:120 },
    { id:3, nome:'Headset', preco:200 }
  ];
  carrinho: Item[] = [];
  add(p:Produto){ const it = this.carrinho.find(i=>i.prod.id===p.id); it? it.qtd++ : this.carrinho.push({prod:p,qtd:1}); }
  remover(p:Produto){ const i = this.carrinho.findIndex(x=>x.prod.id===p.id); if(i>-1){ this.carrinho[i].qtd--; if(this.carrinho[i].qtd<=0) this.carrinho.splice(i,1);} }
  total(){ return this.carrinho.reduce((s,i)=> s + i.qtd*i.prod.preco, 0); }
}
