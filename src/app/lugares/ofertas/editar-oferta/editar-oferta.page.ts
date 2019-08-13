import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LugaresService } from '../../lugares.service';
import { Lugar } from '../../lugar.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.page.html',
  styleUrls: ['./editar-oferta.page.scss'],
})
export class EditarOfertaPage implements OnInit {
  lugar = new Lugar();
  formEdicao: FormGroup;

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private lugaresService: LugaresService
  ) { }

  ngOnInit() {
    this.formEdicao = new FormGroup({
      titulo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      descricao: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      })
    });
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('lugarId')) {
        this.navCtrl.navigateBack('/lugares/tabs/ofertas');
        return;
      }
      this.lugar = this.lugaresService.getLugar(paramMap.get('lugarId'));
      this.formEdicao.get('titulo').setValue(this.lugar.titulo);
      this.formEdicao.get('descricao').setValue(this.lugar.descricao);
    });
  }

  onEditOferta() {
    if (!this.formEdicao.valid) {
      return;
    }
  }
}
