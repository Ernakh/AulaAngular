import { Component } from '@angular/core';
import { ContadorService } from '../Services/contador-service';

@Component({
  selector: 'app-contador-a',
  imports: [],
  templateUrl: './contador-a.html',
  styleUrl: './contador-a.css'
})
export class ContadorA {
  constructor(public contador: ContadorService) {}
}
