import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-esq-senha',
  templateUrl: './esq-senha.page.html',
  styleUrls: ['./esq-senha.page.scss'],
})
export class EsqSenhaPage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }
  cadpodologo(){
    this.navCtrl.navigateForward(['/cadastropodologo']);
}

}
