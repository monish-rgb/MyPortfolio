import { Component, OnInit,OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { interval } from 'rxjs';
import Typed from 'typed.js';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { slideInAnimation } from '../../animations';
@Component({
  selector: 'app-home',
  imports: [RouterLink,FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {
 
  constructor(private titleService: Title,private sanitizer: DomSanitizer) {
    this.titleService.setTitle('MONISH | Home')
  }
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFileAlt = faFileAlt
  

  roles: string[] = [ "Coding Enthusiast", " Software Developer", " Backend Engineer", " Fullstack Developer", " Cloud Enthusiast"];
  ngOnInit(): void {
    var options = {
      strings: ["Coding Enthusiast", " Software Developer", " Backend Engineer", " Fullstack Developer", " Cloud Enthusiast"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };   
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

  seeResume() {
    
    const resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/MonishDevineni_Resume.pdf');
    if (resumeUrl) {
      // Open the resume in a new tab:
      window.open('assets/MonishDevineni_Resume.pdf', '_blank');     
    } else {
      alert("Resume not available."); // Or handle the case where the URL is not set
    }
  }

  }


 

  