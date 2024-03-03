import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { Pagination } from './model/pagination';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DealNet';

  constructor(private basketService: BasketService,private accountService: AccountService){

  }

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadBasket(){
    const basketId = localStorage.getItem('basket_id');
    if(basketId) this.basketService.getBasket(basketId);
  }

  loadCurrentUser(){
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe();
  }
}
