import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow = false;
  constructor() { }

  ngOnInit(): void {
  }


  scroll(id) {
    let el = document.getElementById(id);
    el!.scrollIntoView({ behavior: 'smooth' });
    this.isShow = false;
  }

  openWhitePaper(): void {
    window.open(`//github.com/aura-nw/whitepaper/blob/main/release/Aura_Network___whitepaper.pdf`);
  }
}
