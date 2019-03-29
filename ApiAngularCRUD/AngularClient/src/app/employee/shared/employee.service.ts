import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employeeList: Employee[];

  constructor(private http: Http) { }

  postEmployee(employee: Employee) {
    const url = 'http://localhost:60090/api/Employees';
    const body = JSON.stringify(employee);
    const headerOptions = new Headers({'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(url, body, requestOptions).pipe(map(x => x.json()));
  }

  getEmployeeList() {
    this.http.get('http://localhost:60090/api/Employees').pipe(map((data: Response) => {
      return data.json() as Employee[];
    })).toPromise().then(x => {
      this.employeeList = x;
    });
  }
}
