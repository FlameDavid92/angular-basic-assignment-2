import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = '';

  onClear() {
    this.username = '';
  }

  isEmptyUsername() {
    return this.username.trim().length === 0;
  }
}
