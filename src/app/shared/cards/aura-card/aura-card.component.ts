import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aura-card',
  templateUrl: './aura-card.component.html',
  styleUrls: ['./aura-card.component.scss']
})
export class AuraCardComponent implements OnInit {
  @Input() icon: string | undefined;
  @Input() title: string | undefined;
  @Input() subTitle: string | undefined;
  @Input() desc: string | undefined;
  @Input() content: string | undefined;
  @Input() size: 'sm' | 'md' | '' = '';

  constructor() { }

  ngOnInit(): void {
  }

}
