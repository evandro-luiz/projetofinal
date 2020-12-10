import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homecliente',
  templateUrl: './homecliente.page.html',
  styleUrls: ['./homecliente.page.scss'],
})
export class HomeclientePage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  marcar(){
    this.navCtrl.navigateForward(['/marcarconsulta']);
  }
  visualizar(){
    this.navCtrl.navigateForward(['/visualizarconsulta']);
  }
}
