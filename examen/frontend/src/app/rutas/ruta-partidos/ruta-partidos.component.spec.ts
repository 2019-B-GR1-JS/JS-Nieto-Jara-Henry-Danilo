import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPartidosComponent } from './ruta-partidos.component';

describe('RutaPartidosComponent', () => {
  let component: RutaPartidosComponent;
  let fixture: ComponentFixture<RutaPartidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaPartidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
