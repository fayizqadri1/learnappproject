import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 public emdata: any;
 
  constructor(private service:AppServiceService) { }
  // addEmployee(emp){
  //   //śconsole.log(docReg.value);
  //   this.service.addemployee(emp.value);

  // }
  ngOnInit(): void {
     this.getapidata();
    

  }

  getapidata(){
    this.service.getData().subscribe((response) =>{
      console.log('response from api is:',response);
    },(error)=>{
      console.log('error is',error);
    })
  }

  addEmployee(emp:NgForm){
    //śconsole.log(docReg.value);
    this.emdata = emp.value;
    // console.log('test comp ts file',this.emdata);
    this.service.addemployee(this.emdata);

  }

}
