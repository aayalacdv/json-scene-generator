import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondTabComponent } from './second-tab/second-tab.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ThirdTabComponent } from './third-tab/third-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    SecondTabComponent,
    ThirdTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule, 
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule, 
    MatIconModule, 
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
