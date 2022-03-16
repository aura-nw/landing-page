import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  pageYOffset = 0;
  public innerWidth: any;
  isContainer = false;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYOffset = window.pageYOffset;
  }
  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
  }
  scrollToTop(){
    this.scroll.scrollToPosition([0, 0]);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isContainer = this.innerWidth > 1920;
  }
}
