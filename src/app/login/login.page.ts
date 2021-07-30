import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController,
              private utilS: UtilService,) { }

  ngOnInit() {
  }

  login(){
    //Enabling side menu
    this.utilS.setMenuState(true);
    this.navCtrl.navigateRoot('/landing', {animationDirection: 'forward'});
  }

}
