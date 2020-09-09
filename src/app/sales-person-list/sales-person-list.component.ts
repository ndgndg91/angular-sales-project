import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Dong-Gil', 'Nam', 'ndgndg91@gmail.com', 5000),
    new SalesPerson('Jonh', 'Doe', 'john@gmail.com', 4000),
    new SalesPerson('Claire', 'Murphy', 'claire@gmail.com', 90000),
    new SalesPerson('Mai', 'Truong', 'mai@gmail.com', 6000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
