import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecaoDependenciaLogger } from './injecao-dependencia-logger';

describe('InjecaoDependenciaLogger', () => {
  let component: InjecaoDependenciaLogger;
  let fixture: ComponentFixture<InjecaoDependenciaLogger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjecaoDependenciaLogger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjecaoDependenciaLogger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
