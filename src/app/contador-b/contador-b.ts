import { Component } from '@angular/core';
import { ContadorService } from '../Services/contador-service';

@Component({
  selector: 'app-contador-b',
  imports: [],
  templateUrl: './contador-b.html',
  styleUrl: './contador-b.css'
})
export class ContadorB {
  constructor(public contador: ContadorService) {}
}
