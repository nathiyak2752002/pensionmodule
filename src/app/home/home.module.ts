import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { MaterialModule } from '../shared/material.module';
import { OngoingPersonnelDetailsComponent } from '../all-component/ongoing-personnel-details/ongoing-personnel-details.component';

import { MatInputModule } from '@angular/material/input';
import { WorkingsheetComponent } from '../all-component/workingsheet/workingsheet.component';
import { WorkingsheetSettlementComponent } from '../all-component/workingsheet-settlement/workingsheet-settlement.component';
import { MatTableModule } from '@angular/material/table';
import { PaymentMonthlypensionComponent } from '../all-component/payment-monthlypension/payment-monthlypension.component';
import { PaymentMonthlypensionScreen2Component } from '../all-component/payment-monthlypension-screen2/payment-monthlypension-screen2.component';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    NavbarComponent,
   
    OngoingPersonnelDetailsComponent,
    WorkingsheetComponent,
    WorkingsheetSettlementComponent,
    PaymentMonthlypensionComponent,

    PaymentMonthlypensionScreen2Component,
  
    

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
