import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private isMenuEnabled = new Subject<boolean>();

  constructor() { }

  //creating method to handle side menu state (enabled or disabled)
  setMenuState(enabled){
    this.isMenuEnabled.next(enabled);
  }

  //method for get menu state
  getMenuState(): Subject<boolean>{
    return this.isMenuEnabled;
  }
}
