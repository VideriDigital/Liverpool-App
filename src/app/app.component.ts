import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Liverpool-App';

  // Inside a component or service
constructor(private router: Router) {}

navigateToResults() {
  this.router.navigate(['/results']);
}
}


