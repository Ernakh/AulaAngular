import { Component } from '@angular/core';

@Component({
  selector: 'app-aula-boot-strap',
  imports: [],
  standalone: true,
  templateUrl: './aula-boot-strap.html',
  styleUrl: './aula-boot-strap.css'
})

export class AulaBootStrap {
  nome = 'Fabrício';
  descricao = 'Desenvolvedor Front-end Angular e Bootstrap.';
  imagem = 'img/perfil.png';
}
