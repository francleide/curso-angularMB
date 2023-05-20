import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {
  show: boolean = true;
  showButton: boolean = false;
  showMessage(): void {
    this.show = !this.show; //toggle
  }
  showMessageMore():void {
    if (this.show == true) {
      this.showButton = !this.showButton;
    }
  }
}
