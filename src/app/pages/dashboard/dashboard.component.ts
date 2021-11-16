import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewChecked {
  @ViewChild('widgetsContent', { read: ElementRef }) widgetsContent: ElementRef<any>;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.scrollRight();
    }, 500);
  }
  ngAfterViewChecked(): void {

  }
  scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 5000), behavior: 'smooth' });
  }

}
