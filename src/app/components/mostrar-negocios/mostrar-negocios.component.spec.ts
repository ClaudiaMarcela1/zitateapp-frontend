import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNegociosComponent } from './mostrar-negocios.component';

describe('MostrarNegociosComponent', () => {
  let component: MostrarNegociosComponent;
  let fixture: ComponentFixture<MostrarNegociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarNegociosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
