import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow = false;
  public innerWidth: any;
  isContainer = false;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
  }


  scroll(id) {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.isShow = false;
  }

  openWhitePaper(): void {
    window.open(`//github.com/aura-nw/whitepaper/blob/main/release/Aura_Network___whitepaper.pdf`);
  }
}
