import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { OngoingPersonnelDetailsComponent } from '../all-component/ongoing-personnel-details/ongoing-personnel-details.component';
import { WorkingsheetComponent } from '../all-component/workingsheet/workingsheet.component';
import { WorkingsheetSettlementComponent } from '../all-component/workingsheet-settlement/workingsheet-settlement.component';
import { PaymentMonthlypensionComponent } from '../all-component/payment-monthlypension/payment-monthlypension.component';
import { PaymentMonthlypensionScreen2Component } from '../all-component/payment-monthlypension-screen2/payment-monthlypension-screen2.component';


const routes: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [{ path: '', redirectTo: 'pension-list', pathMatch: 'full' },

    { path: 'ongoing-personnel-details/:id', component: OngoingPersonnelDetailsComponent },
    { path: 'workingsheet', component: WorkingsheetComponent },
    { path: 'workingsheet-settlement', component: WorkingsheetSettlementComponent },
    { path: 'payment-monthlypension', component: PaymentMonthlypensionComponent },
    { path: 'payment-monthlypension-screen2', component: PaymentMonthlypensionScreen2Component },
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
