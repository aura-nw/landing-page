import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor() { }
  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 5,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1
      //   }
      // }
    ]
  };

  ngOnInit(): void {}
}
