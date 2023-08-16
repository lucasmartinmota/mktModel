import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'container-two',
  templateUrl: './container-two.component.html',
  styleUrls: ['./container-two.component.scss']
})
export class ContainerTwoComponent implements OnInit {
  public innerWidth: any;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
