/*********************************
 * 
 * Component to manage the creation
 * of new entries.
 * 
 **********************************/

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-fish-create',
  templateUrl: './fish-create.component.html',
  styleUrls: ['./fish-create.component.css']
})
export class FishCreateComponent implements OnInit {

  @Input() fishDetails = {fishLength: 0, sex: '', species: ''}

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addFish() {
    this.restApi.createFish(this.fishDetails).subscribe((data: {}) => {
      this.router.navigate(['/fish-list'])
    })
  }
  

}
