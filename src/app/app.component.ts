/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from './util.service';
import { menuController } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  public isMenuEnabled: boolean = true;
  public selectedIndex = 0;

  constructor(private utilS: UtilService,
              private router: Router,){}


ngOnInit(){
  this.selectedIndex = 1;
  this.utilS.getMenuState().subscribe(respMenuState => {
    this.isMenuEnabled = respMenuState;
  });
}

navigate(path, selectedId) {
  this.selectedIndex = selectedId;
  this.router.navigate([path]);
}

close() {
  menuController.toggle();
}
}

