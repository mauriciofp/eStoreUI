import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
public categories = [];
public featuredproducts = [];
public bestSellProducts = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.categories = this.dataService.getCategories();
    this.featuredproducts = this.dataService.getFeaturedProducts();
    this.bestSellProducts = this.dataService.getBestSellProducts();
  }

}
