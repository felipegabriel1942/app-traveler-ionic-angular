import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOfertaPage } from './editar-oferta.page';

describe('EditarOfertaPage', () => {
  let component: EditarOfertaPage;
  let fixture: ComponentFixture<EditarOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOfertaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
