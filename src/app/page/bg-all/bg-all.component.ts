import { Component, HostListener } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'bg-all',
  templateUrl: './bg-all.component.html',
  styleUrls: ['./bg-all.component.scss']
})
export class BgAllComponent {
  isMenuScrolled = false;
  isSidebarScrolled = false;

   @HostListener('window:scroll', ['$event'])
    scrollCheck(){
      if(window.scrollY > 100)
        this.isMenuScrolled = true;
      else 
        this.isMenuScrolled = false;
    }
    scrollToTop(){
      document.body.scrollIntoView({behavior: 'smooth'})
    }

  option1:AnimationOptions = {
    path: 'assets/bg1.json',
  }
  option2:AnimationOptions = {
    path: 'assets/bg2.json',
  }
  option3:AnimationOptions = {
    path: 'assets/bg-cell.json',
  }
}
