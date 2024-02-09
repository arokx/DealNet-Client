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
  products:Product[] = [];

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('https://localhost:7108/api/products?pageSize=50').subscribe({
      next: (response) => {
        this.products = response.data;
      },
      error: error => console.error(error),
      complete:() =>{
        console.log("request completed.");
      }
      
    })
  }
}
