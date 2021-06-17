import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = "Default text"

  constructor() {}

  onChageText() {
    this.text = "Changed!"
  }

}
