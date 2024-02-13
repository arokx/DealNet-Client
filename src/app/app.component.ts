import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { Pagination } from './model/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DealNet';

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
  }
}
