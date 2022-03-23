import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  featureShow = false;
  partnerShow = false;
  resourceShow = false;
  aboutShow = false;
  public innerWidth: any;
  isContainer = false;
  ariaExpanded = false;
  constructor() { }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
    this.ariaExpanded = false;
  }

  scroll(id, position: 'nearest' | 'end' | 'start' | 'center') {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: position });
  }
}
