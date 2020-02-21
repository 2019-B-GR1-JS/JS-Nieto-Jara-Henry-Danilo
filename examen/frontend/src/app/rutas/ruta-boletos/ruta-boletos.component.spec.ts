import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBoletosComponent } from './ruta-boletos.component';

describe('RutaBoletosComponent', () => {
  let component: RutaBoletosComponent;
  let fixture: ComponentFixture<RutaBoletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaBoletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
