import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutainicioComponent } from './rutainicio.component';

describe('RutainicioComponent', () => {
  let component: RutainicioComponent;
  let fixture: ComponentFixture<RutainicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutainicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutainicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
