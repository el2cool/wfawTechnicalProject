import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {

  Fishes: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(){
    this.loadFishes();
  }

  loadFishes() {
    return this.restApi.getFishes().subscribe((data: {}) => {
      this.Fishes = data;
    })
  }

  deleteFish(id: number) {
    if (window.confirm('Are you sure?')) {
      this.restApi.deleteFish(id).subscribe(data => {
        this.loadFishes()
      })
    }
  }

  

}
