import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink,Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome,faPerson,faEnvelope,faCode,faBriefcase } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    FontAwesomeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  faHome = faHome;
  faPerson = faPerson;
  faContact = faEnvelope;
  faCode = faCode;
  faBriefcase = faBriefcase;

  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    console.log(window.scrollY);
    this.isScrolled = window.scrollY > 50; // If scrolled more than 50px
  }
}