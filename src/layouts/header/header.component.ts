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
  ariaExpanded = false;
  isFloatingButton = false;
  @ViewChild('headerNavbarMenu') headerNavbarMenu!: ElementRef;
  constructor() { }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.ariaExpanded = !!this.headerNavbarMenu.nativeElement.classList.contains('expanded');
  }
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event) {
    this.innerWidth = window.innerWidth;
    this.ariaExpanded = !!this.headerNavbarMenu.nativeElement.classList.contains('expanded');
  }

  scroll(id, position: 'nearest' | 'end' | 'start' | 'center') {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: position });
  }

  expandAria(): void {
    this.ariaExpanded = !this.ariaExpanded;
    const buttonFloat: HTMLElement | null =
      document.getElementById('aura-button-float');

    if (buttonFloat) {
      this.isFloatingButton = this.isFloatingButton
        ? true
        : buttonFloat.classList.contains('show');

      if (this.ariaExpanded) {
        buttonFloat.classList.remove('show');
      } else if (this.isFloatingButton) {
        buttonFloat.classList.add('show');
        this.isFloatingButton = false;
      }
    }
  }
} 
