import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasReservasPage } from './ofertas-reservas.page';

describe('OfertasReservasPage', () => {
  let component: OfertasReservasPage;
  let fixture: ComponentFixture<OfertasReservasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasReservasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
