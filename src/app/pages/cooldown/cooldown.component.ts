import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-cooldown',
  templateUrl: './cooldown.component.html',
  styleUrls: ['./cooldown.component.scss']
})
export class CooldownComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
    const script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
          const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;
              const countDown = new Date("Sat Oct 01 2022 10:10:00 GMT+07:00");
              x = setInterval(function() {
                const now = new Date().getTime(),
                distance = countDown - now;
                document.getElementById("days").innerText = Math.floor(distance / (day)) < 10 ? "0" + Math.floor(distance / (day)) : Math.floor(distance / (day)) ,
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)) < 10 ? "0" + Math.floor((distance % (day)) / (hour)) : Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)) < 10 ? "0" + Math.floor((distance % (hour)) / (minute)) : Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second) < 10 ? "0" + Math.floor((distance % (minute)) / second) : Math.floor((distance % (minute)) / second);
                //seconds
              }, 0);
        `;
    this._renderer2.appendChild(this._document?.body, script);
  }

}
