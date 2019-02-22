import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Shared/employee.service';  
import { DepartmentService } from '../../Shared/department.service';
import { NotificationService } from '../../Shared/notification.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
    private departmentService: DepartmentService,
    private notificationservice: NotificationService) { }
    // departments=[
    //   {id:1, value:'Dept 1'},
    //   {id:2, value:'Dept 2'},
    //   {id:3, value:'Dept 3'}
    // ];

  ngOnInit() {
    this.service.getEmployees();
  }
  onClear(){
    this.service.form.reset();
    this.service.initalizeFormGroup();
  }
  onSubmit(){
    if(this.service.form.valid){
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initalizeFormGroup();
      this.notificationservice.success(':: Submitted successfully');
    }
  }
}
