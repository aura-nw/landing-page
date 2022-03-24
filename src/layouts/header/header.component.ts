import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

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
  @ViewChild('headerNavbarMenu') headerNavbarMenu!: ElementRef;
  constructor() { }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
    this.ariaExpanded = !!this.headerNavbarMenu.nativeElement.classList.contains('expanded');
  }
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event) {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
    this.ariaExpanded = !!this.headerNavbarMenu.nativeElement.classList.contains('expanded');
  }

  scroll(id, position: 'nearest' | 'end' | 'start' | 'center') {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: position });
  }

}
