import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaBootStrap } from './aula-boot-strap';

describe('AulaBootStrap', () => {
  let component: AulaBootStrap;
  let fixture: ComponentFixture<AulaBootStrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AulaBootStrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulaBootStrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
