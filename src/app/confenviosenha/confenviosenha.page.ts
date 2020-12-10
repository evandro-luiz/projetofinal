import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confenviosenha',
  templateUrl: './confenviosenha.page.html',
  styleUrls: ['./confenviosenha.page.scss'],
})
export class ConfenviosenhaPage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }
  retornar(){
    this.navCtrl.navigateForward(['folder/Inbox']);
}

}
