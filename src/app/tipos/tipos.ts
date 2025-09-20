import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Post {
  id: number;
  titulo: string;
  conteudo: string;
  autor: string;
  data: Date;
}

type Admin = { nome: string; nivel: number };
type User = { email: string };
type AdminUser = Admin & User;

type Produto = { nome: string; preco: number; estoque?: number };

@Component({
  selector: 'app-tipos',
  imports: [FormsModule],
  templateUrl: './tipos.html',
  styleUrl: './tipos.css'
})

export class Tipos {

  id: number | string;

  constructor() {
    this.id = 123;
  }

  trocarId() {
    this.id =  "abc";
  }

  nome: string = "Fabrício";
  idade: number = 35;
  ativo: boolean = true;

  produtos: string[] = ["Mouse", "Teclado", "Monitor"];

  coordenada: [number, number] = [10, 20];

post: Post = {
  id: 1,
  titulo: "Meu primeiro post",
  conteudo: "Este é o conteúdo do post...",
  autor: "Ana",
  data: new Date()
};


posts: Post[] = [
  {
    id: 1,
    titulo: "Angular é incrível",
    conteudo: "Hoje vamos aprender sobre diretivas e data binding.",
    autor: "Maria",
    data: new Date("2025-09-01")
  },
  {
    id: 2,
    titulo: "TypeScript ajuda demais",
    conteudo: "A tipagem forte evita muitos erros e dá mais segurança.",
    autor: "João",
    data: new Date("2025-09-05")
  }
];

prod : Produto = { nome: "Camiseta", preco: 29.99, estoque: 100}

user : AdminUser = {
  nome: "Fabrício",
  nivel: 5,
  email: "fabriciotonettolondero@gmail.com"
}

  // any: compila sempre, pode quebrar em runtime
  valorAny: any = 123;

  // unknown: precisa de narrowing antes de usar
  valorUnknown: unknown = 'texto';

  // campo só para digitação no exemplo
  entrada = '';

  setAny() {
    // pode receber qualquer coisa
    this.valorAny = this.entrada;// string, number, etc.
  }

  setUnknown() {
    // continua unknown, mas você pode guardar qualquer coisa
    // (vamos guardar string ou number conforme a entrada)
    const n = Number(this.entrada);
    this.valorUnknown = isNaN(n) ? this.entrada : n;
  }

  // Narrowing seguro para unknown
  toUpperIfString(v: unknown): string | null {
    return (typeof v === 'string') ? v.toUpperCase() : null;
  }

  toFixedIfNumber(v: unknown): string | null {
    return (typeof v === 'number') ? v.toFixed(2) : null;
  }

  toUpperIfPossible(value: any): string | null {
  return (typeof value === 'string' && value.toUpperCase) ? value.toUpperCase() : null;
  }

  //never: função que nunca retorna (lança erro)
  falhar(msg: string): never {
    throw new Error(msg);
  }



}

function identidade<T>(valor: T): T {
  return valor;
}

function primeiroElemento<T>(lista: T[]): T {
  return lista[0];
}

