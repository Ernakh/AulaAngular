import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio5',
  imports: [FormsModule],
  templateUrl: './exercicio5.html',
  styleUrl: './exercicio5.css'
})
export class Exercicio5 {
  email = ''; senha = ''; logado = false;
  valido(){ return this.email.includes('@') && this.senha.length >= 4; }
  login(){ if(this.valido()) this.logado = true; }
}
