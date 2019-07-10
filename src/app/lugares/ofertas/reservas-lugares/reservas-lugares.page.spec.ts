import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasLugaresPage } from './reservas-lugares.page';

describe('ReservasLugaresPage', () => {
  let component: ReservasLugaresPage;
  let fixture: ComponentFixture<ReservasLugaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasLugaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasLugaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
