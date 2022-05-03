import { Component } from '@angular/core';
import { User } from '@mono-repo/shared';

@Component({
  selector: 'mono-repo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: User = {name: 'Angular', age: 25};
  title = 'customer';
}
