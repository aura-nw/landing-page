import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  scroll(id) {
    let el = document.getElementById(id);
    el!.scrollIntoView({ behavior: 'smooth' });
  }
}
