import { Component, OnInit } from '@angular/core';

interface Employees {
  name: string;
  lastname : string
  description: string;

}
const EMPLOYEES: Employees[] = [
  {
    name: 'Ana',
    lastname: 'Bregu',
    description: 'Programmer'
 
  },
  {
    name: 'Teo',
    lastname: 'Hoxha',
    description: 'Project Manager'

  },
  {
    name: 'Fatma',
    lastname: 'Molla',
    description: 'Programmer',
 
  },
  {
    name: 'Klea',
    lastname: 'Duro',
    description: 'Programmer'

  }
];
@Component({
  selector: 'app-hr-list',
  templateUrl: './hr-list.component.html',
  styleUrls: ['./hr-list.component.css']
})

export class HrListComponent implements OnInit {
  employees = EMPLOYEES;
  constructor() { }

  ngOnInit(): void {console.log(this.employees)

  }

}
