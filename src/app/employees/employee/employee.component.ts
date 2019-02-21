import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Shared/employee.service';  
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }
    departments=[
      {id:1, value:'Dept 1'},
      {id:2, value:'Dept 2'},
      {id:3, value:'Dept 3'}];
  ngOnInit() {
  }
  onClear(){
    this.service.form.reset();
    this.service.initalizeFormGroup();
  }
}
