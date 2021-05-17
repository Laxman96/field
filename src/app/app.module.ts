import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as storeModuleConfiguration from './store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardPaymentStoreEffects } from './store/effects';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { PaymentService } from './services/payment.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardPaymentStoreModule } from './store';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { CreditCardPaymentFacade } from './store/facade'
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatSliderModule} from '@angular/material/slider'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DetailsComponent } from './details/details.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CardPaymentComponent,
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSidenavModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ToasterModule,
    CommonModule,
    CreditCardPaymentStoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    EffectsModule.forRoot(),
    StoreModule.forFeature(storeModuleConfiguration.moduleFeatureKey, storeModuleConfiguration.moduleReducers),
    EffectsModule.forFeature([CreditCardPaymentStoreEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [PaymentService, ToasterService, CreditCardPaymentFacade, CreditCardPaymentStoreEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
