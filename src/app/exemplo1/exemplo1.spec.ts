import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo1 } from './exemplo1';

describe('Exemplo1', () => {
  let component: Exemplo1;
  let fixture: ComponentFixture<Exemplo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
