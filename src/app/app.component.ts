import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { WorkComponent } from "./work/work.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, 
    WorkComponent, AboutComponent,
    ContactComponent, HomeComponent, ExperienceComponent,SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Monish_Portfolio';
  constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
      this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
}
}