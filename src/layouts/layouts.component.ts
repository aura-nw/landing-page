import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  pageYOffset = 0;
  scrolling = false;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYOffset = window.pageYOffset;
  }
  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {}
  scrollToTop(){
    this.scroll.scrollToPosition([0, 0]);
    this.scrolling = true;
    setTimeout(() => {this.scrolling = !this.scrolling; }, 500);
  }
}
