import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss']
})
export class StaffCardComponent implements OnInit {
  @Input() isAdvisors = true;
  @Input() img: string | undefined;
  @Input() name: string | undefined;
  @Input() position: string | undefined;
  @Input() company: string | undefined;
  @Input() desc: string | undefined;
  @Input() socialLink: {linkedIn: string, twitter: string} | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
