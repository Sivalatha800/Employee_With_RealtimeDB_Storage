import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Service/employee.service';
import { ServerdataService } from 'src/app/Service/serverdata.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(
    public serverData: ServerdataService,
    public empService: EmployeeService
  ) {}

  ngOnInit() {
    this.serverData.getData();
  }

  onEdit(employee: any) {
    this.serverData.editEmpDetails = employee;
    this.serverData.editDataForm();
  }
}
