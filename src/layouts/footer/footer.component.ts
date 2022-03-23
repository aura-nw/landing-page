import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  formData: {email: string | undefined} = {email: ''};
  email: string | undefined;
  submitted = false;
  constructor() { }

  ngOnInit(): void {}

  onSubmitCTAForm() {
    this.submitted = true;
    console.log(this.formData.email);
  }
  scroll(id, position: 'nearest' | 'end' | 'start' | 'center') {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: position });
  }
}
