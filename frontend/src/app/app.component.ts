import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      PSSocial
      <span style="flex: 1 1 auto"></span>
      <button mat-button routerLink="/register">Register</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my app';
}
