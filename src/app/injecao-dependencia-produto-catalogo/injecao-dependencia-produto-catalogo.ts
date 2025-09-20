import { Component } from '@angular/core';
import { InjecaoDependenciaProduto } from '../injecao-dependencia-produto/injecao-dependencia-produto';

@Component({
  selector: 'app-injecao-dependencia-produto-catalogo',
  imports: [],
  templateUrl: './injecao-dependencia-produto-catalogo.html',
  styleUrl: './injecao-dependencia-produto-catalogo.css'
})
export class InjecaoDependenciaProdutoCatalogo {
  produtos: string[] = [];
  constructor(private produtoC: InjecaoDependenciaProduto) {
    this.produtos = this.produtoC.listar();
  }
}
