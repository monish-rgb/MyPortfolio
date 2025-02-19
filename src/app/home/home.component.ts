import { Component, OnInit,OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { interval } from 'rxjs';
import Typed from 'typed.js';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  imports: [RouterLink,FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
 
  constructor(private titleService: Title,private sanitizer: DomSanitizer) {
    this.titleService.setTitle('MONISH | Home')
  }
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFileAlt = faFileAlt
  resumeUrl: SafeUrl | null = null;

  roles: string[] = [ "Coding Enthusiast", " Software Developer", " Backend Engineer", " Fullstack Developer", " Cloud Enthusiast"];
  ngOnInit(): void {
    const resumePath = 'assets/MonishDevineni_Resume.pdf'; //Resume URL
    this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(resumePath);
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
    if (this.resumeUrl) {
      // Open the resume in a new tab:
      window.open(this.resumeUrl as string, '_blank');
    } else {
      alert("Resume not available."); // Or handle the case where the URL is not set
    }
  }

  }


 

  