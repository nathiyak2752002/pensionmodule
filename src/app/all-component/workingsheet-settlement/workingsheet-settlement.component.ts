import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-workingsheet-settlement',
  templateUrl: './workingsheet-settlement.component.html',
  styleUrl: './workingsheet-settlement.component.css'
})
export class WorkingsheetSettlementComponent {
  settlement!:FormGroup;
  formBuilder: any;

constructor(private fb: FormBuilder) { 

}

ngOnInit(): void {
  this.settlement = this.fb.group({
    empId: ['', Validators.required],
    empName:['',Validators.required],
    designation:['',Validators.required],
    officeCode:['',Validators.required],
    dob:['',Validators.required],
    doa:['',Validators.required],
    dor:['',Validators.required],
    age:['',Validators.required],
    ppoNo:['',Validators.required],
    arrearStart:['',Validators.required],
    arrearTo:['',Validators.required],
    basicPension:['',Validators.required],
    commutedPension:['',Validators.required],    
    pensionPayable:['',Validators.required],    
    totalPensionPayable:['',Validators.required],    
    additionalPension:['',Validators.required],    
    da:['',Validators.required],    
    ma:['',Validators.required],    
    grossPension:['',Validators.required],    
    dcrg:['',Validators.required],   
    commutation:['',Validators.required],   
    totalAmount:['',Validators.required],   
    recoveryOne:['',Validators.required],   
    recoveryTwo:['',Validators.required],   
    recoveryThree:['',Validators.required],   
    recoveryFour:['',Validators.required],   
    totalRecoveries:['',Validators.required],   
    netPayable:['',Validators.required],  
    

});











}



}