import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAws, faGoogle, faMicrosoft,
  faPython, faJava, faJs, faHtml5,
  faCss3Alt, faReact, faNodeJs,
  faGit, faAngular 
 } from '@fortawesome/free-brands-svg-icons';
import { faCloud,faDatabase } from '@fortawesome/free-solid-svg-icons';
registerSwiperElements();
@Component({
  selector: 'app-skills',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillsComponent {
  faAws=faAws
  faGoogle=faGoogle
  faMicrosoft=faMicrosoft
  faPython=faPython
  faJs=faJs
  faJava=faJava
  faHtml5=faHtml5
  faCss=faCss3Alt
  faReact=faReact
  faAngular=faAngular
  faGit=faGit
  facloud=faCloud
  fadb=faDatabase
  faNode=faNodeJs
  techStack = [
    { name: 'Python', image: 'assets/python.png', delay: '0s' },
    { name: 'Java', image: 'assets/java.png', delay: '0.2s' },
    { name: 'JavaScript', image: 'assets/javascript.png', delay: '0.4s' },
    { name: 'Scala', image: 'assets/scala.png', delay: '0.6s' },
    { name: 'SQL', image: 'assets/sql.png', delay: '0.8s' },
    { name: 'MongoDB', image: 'assets/mongodb.png', delay: '1s' },
    { name: 'Database', image: 'assets/database.png', delay: '1.2s' }
  ];
}