import { Injectable } from '@angular/core';
import { Lugar } from './lugar.model';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  private _lugares: Lugar[] = [
    new Lugar(
      '1',
      'Porto de Galinhas',
      'A praia mais famosa do litoral pernambucano é um dos imperdíveis pontos turísticos do Brasil. Suas areias são bem movimentadas e não faltam opções de barracas com bebidas e comidinhas, mas a atração principal mesmo fica a cerca de 200 m da costa.',
      'https://magazine.zarpo.com.br/wp-content/uploads/2019/04/xmaragogi_alagoas_zarpo.jpg.pagespeed.ic.-nplvwe9S0.webp',
      250.60,
      new Date('2019-01-01'),
      new Date('2019-12-31')),
    new Lugar(
      '2',
      'Cataratas do Iguaçu',
      'Um dos pontos turísticos do Brasil mais dignos de estampar cartões-postais é, na verdade, um tesouro compartilhado com nossos hermanos. ',
      'https://magazine.zarpo.com.br/wp-content/uploads/2018/09/xcataratas-do-iguacu_parana_zarpo.jpg.pagespeed.ic.hDoqCxngZo.webp',
      150.39,
      new Date('2019-01-01'),
      new Date('2019-12-31')),
    new Lugar(
      '3',
      'Praia de Jericoacoara',
      'Jericoacoara é uma praia localizada no município de Jijoca de Jericoacoara, no estado do Ceará, no Brasil. Está localizada a 300 km a oeste da capital do estado, Fortaleza. Foi eleita em 1994 pelo jornal estadunidense The Washington Post uma das dez praias mais bonitas do planeta.',
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/Anderps_067.JPG',
      100.65,
      new Date('2019-01-01'),
      new Date('2019-12-31'))
  ];

  get lugares() {
    return [...this._lugares];
  }

  constructor() {

  }

  getLugar(id: string) {
    return {...this._lugares.find(
      p => p.id === id)};
  }
}
