import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  env = environment;
  constructor() { }

  ngOnInit(): void {}

  scroll(id, position: 'nearest' | 'end' | 'start' | 'center') {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: position });
  }

  copyData(text: string): void {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    // fake event click out side copy button
    // this event for hidden tooltip
    setTimeout( () => {
      document.getElementById('popupCopy')?.click();
    }, 800);
  }
}
