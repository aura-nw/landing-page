import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../environments/environment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BuyAuraComponent} from '../../app/shared/popup/buy-aura/buy-aura.component';
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
  env = environment;
  @ViewChild('headerNavbarMenu') headerNavbarMenu!: ElementRef;
  constructor(public dialog: MatDialog) {}
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
  openModal() {
    const dialogRef = this.dialog.open(BuyAuraComponent, {
      width: '508px',
      panelClass: 'aura-dialog'
    });
  }
}
