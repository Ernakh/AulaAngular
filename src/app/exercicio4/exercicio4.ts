import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Item = { texto: string; editando?: boolean };

@Component({
  selector: 'app-exercicio4',
  imports: [FormsModule],
  templateUrl: './exercicio4.html',
  styleUrl: './exercicio4.css'
})
export class Exercicio4 {
  itens: Item[] = [{ texto:'Ana' }, { texto:'Bruno' }];
  novo = '';
  add(){ if(!this.novo.trim()) return; this.itens.push({ texto:this.novo.trim() }); this.novo=''; }
  remover(i:number){ this.itens.splice(i,1); }
  editar(i:number){ this.itens[i].editando = true; }
  salvar(i:number){ this.itens[i].editando = false; }
}
