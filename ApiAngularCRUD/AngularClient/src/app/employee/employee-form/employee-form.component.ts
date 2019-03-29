import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      EmployeeId: 0,
      FullName: '',
      Email: ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.EmployeeId === 0) {
      this.employeeService.postEmployee(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.employeeService.getEmployeeList();
          // this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        });
    } else {
      // this.employeeService.putEmployee(form.value.EmployeeID, form.value)
      //   .subscribe(data => {
      //     this.resetForm(form);
      //     this.employeeService.getEmployeeList();
      //     // this.toastr.info('Record Updated Successfully!', 'Employee Register');
      //   });
    }
  }

}
