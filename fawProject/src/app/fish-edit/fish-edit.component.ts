import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fish-details',
  templateUrl: './fish-edit.component.html',
  styleUrls: ['./fish-edit.component.css']
})
export class FishEditComponent implements OnInit {
  id = this.actRoute.snapshot.params[('id')];
  fishData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getFish(this.id).subscribe((data: {}) => {
      this.fishData = data;
    })
  }

  updateFish() {
    if(window.confirm('Are you sure?')){
      this.restApi.updateFish(this.id, this.fishData).subscribe(data => {
        this.router.navigate(['/fish-list'])
      })
    }
  }

}
