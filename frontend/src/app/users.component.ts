import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  template: `
    <div *ngFor="let user of apiService.users">
      <mat-card [routerLink]="['/profile', user._id]" style="cursor: pointer; margin: 5px 0;">
        {{user.email}}
      </mat-card>
    </div>
  `
})
export class UsersComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers();
  }
}
