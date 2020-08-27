import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-first-detail-page',
  templateUrl: './first-detail-page.component.html',
  styleUrls: ['./first-detail-page.component.scss']
})
export class FirstDetailPageComponent implements OnInit {

  text: string;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.text = params.get('text');
    });
  }

  ngOnInit(): void {
  }

}
