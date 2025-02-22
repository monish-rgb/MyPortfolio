import { Component ,HostListener} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { fadeInUp } from '../../fadeinu';
import { fadeInLeft } from '../../fadeinl';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [fadeInUp, fadeInLeft]
})
export class AboutComponent {
  animationState = 'hidden';

  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = document.querySelector('.right-section');
    const element1 = document.querySelector('.glitch-wrapper');
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        this.animationState = 'visible';
      }
    }
    if (element1) {
      const rect = element1.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        this.animationState = 'visible';
      }
    }
  }
}
