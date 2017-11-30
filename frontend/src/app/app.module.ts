import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: ProfileComponent }
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, RegisterComponent, LoginComponent, UsersComponent, ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
