import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {DataService} from "../data.service";

@Component({
  selector: 'app-abou',
  templateUrl: './abou.component.html',
  styleUrls: ['./abou.component.scss']
})
export class AbouComponent implements OnInit {

  goals = [];
  
  constructor(private route: ActivatedRoute, private router: Router , private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id)); //take the response of id
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
  }
  sendMeHome(){
    this.router.navigate(['']);
  }

}
