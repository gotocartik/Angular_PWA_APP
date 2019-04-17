import { Component } from '@angular/core';
import { PwaServiceService } from './pwa-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public Pwa: PwaServiceService) { }
  title = 'pwa-app';
  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

}
