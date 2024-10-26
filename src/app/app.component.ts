import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'My Project', url: '/my-project', icon: 'briefcase' },
    { title: 'About Me', url: '/about-me', icon: 'person' },
  ];
  constructor() {}
}
