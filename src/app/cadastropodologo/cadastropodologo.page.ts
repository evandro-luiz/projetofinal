import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastropodologo',
  templateUrl: './cadastropodologo.page.html',
  styleUrls: ['./cadastropodologo.page.scss'],
})
export class CadastropodologoPage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }
  cad(){
    this.navCtrl.navigateForward(['/fincadpodologo']);
}

}
