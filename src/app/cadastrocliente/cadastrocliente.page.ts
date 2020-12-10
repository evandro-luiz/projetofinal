import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrocliente',
  templateUrl: './cadastrocliente.page.html',
  styleUrls: ['./cadastrocliente.page.scss'],
})
export class CadastroclientePage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }
  fincadcliente(){
    this.navCtrl.navigateForward(['/fincadcliente']);
  }
}
