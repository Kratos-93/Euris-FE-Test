import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.css']
})
export class CardReviewComponent implements OnInit {

  @Input() reviews: string;

  constructor() { }

  ngOnInit() {
  }

}
