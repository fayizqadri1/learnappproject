import { Employee } from './models/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AppServiceService {
  // private Employee: Employee[] = [];
    constructor(private http : HttpClient) {}

    getData() {
        return this.http.get('/api/getData');
    }

    addemployee(empdata: any) {
       this.http.post('http://localhost:3000/api/addemp', empdata).subscribe((val) => {
             console.log('testing..............',val);
             console.log(empdata);
        })

    }


}
