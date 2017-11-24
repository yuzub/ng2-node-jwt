import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'messages',
  template: `
    <div *ngFor="let message of apiService.messages">
      <mat-card>{{message.message}}</mat-card>
    </div>
  `,
  styles: [`
    div {
      margin: 5px;
    }
  `]
})
export class MessagesComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getMessages();
  }
}
