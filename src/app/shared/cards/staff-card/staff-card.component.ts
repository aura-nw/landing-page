import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss']
})
export class StaffCardComponent implements OnInit {
  @Input() img: string | undefined;
  @Input() name: string | undefined;
  @Input() position: string | undefined;
  @Input() desc: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
