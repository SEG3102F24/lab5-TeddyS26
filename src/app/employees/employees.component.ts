import { Component, inject } from '@angular/core';
import { EmployeeService } from "../service/employee.service";
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent {
  protected employees: EmployeeService = inject(EmployeeService);
  employeesList: Employee[] = [];

  ngOnInit() {
    this.employees.getEmployees().subscribe((data) => {
      this.employeesList = data;
    });
  }
}
