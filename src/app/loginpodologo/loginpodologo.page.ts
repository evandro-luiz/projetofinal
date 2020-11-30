import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loginpodologo',
  templateUrl: './loginpodologo.page.html',
  styleUrls: ['./loginpodologo.page.scss'],
})
export class LoginpodologoPage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }
  cadpodologo(){
    this.navCtrl.navigateForward(['/cadastropodologo']);
}
esqsenha(){
  this.navCtrl.navigateForward(['/esq-senha']);
}
}
