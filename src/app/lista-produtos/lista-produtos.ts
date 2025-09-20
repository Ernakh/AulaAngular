import { Component } from '@angular/core';
import { ProdutoService } from '../produto-service';

@Component({
  selector: 'app-lista-produtos',
  imports: [],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: string[];

  constructor(private produtoService: ProdutoService) {
    this.produtos = this.produtoService.listar();
  }
}
