import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-oferta',
  templateUrl: './nova-oferta.page.html',
  styleUrls: ['./nova-oferta.page.scss'],
})
export class NovaOfertaPage implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      titulo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      descricao: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      preco: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      dataDe: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dataAte: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onCreateOferta() {
    console.log(this.form);
  }
}
