import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    MatIconModule,
    MatCardModule,
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
