import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-modalojosgenerarsesion',
  templateUrl: './modalojosgenerarsesion.page.html',
  styleUrls: ['./modalojosgenerarsesion.page.scss'],
})
export class ModalojosgenerarsesionPage implements OnInit {
  traidopormodalparams: any;
  constructor(
    navParams: NavParams,
    public modalController: ModalController
  ) {
    this.traidopormodalparams = navParams.get('dataparaelmodal');
    console.log('recibido por modalparams', this.traidopormodalparams);
  }
  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
