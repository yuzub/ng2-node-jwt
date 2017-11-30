import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          <h4>Profile</h4>
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-list>
          <mat-list-item> Name: {{profile?.name}}</mat-list-item>
          <mat-list-item> Email: {{profile?.email}}</mat-list-item>
          <mat-list-item> Description: {{profile?.description}}</mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.apiService.getProfile(id).subscribe(data => this.profile = data.json());
  }
}
