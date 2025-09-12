import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio1',
  imports: [FormsModule],
  templateUrl: './exercicio1.html',
  styleUrl: './exercicio1.css'
})
export class Exercicio1 {
   idade = 30;

  getAnoNascimento(): number {
    const anoAtual = new Date().getFullYear();
    return anoAtual - (this.idade || 0);
  }
}
