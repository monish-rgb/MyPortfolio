import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAws, faGoogle, faMicrosoft,
  faPython, faJava, faJs, faHtml5,
  faCss3Alt, faReact, faNodeJs,
  faGit, faAngular 
 } from '@fortawesome/free-brands-svg-icons';
import { faCloud,faDatabase,faLeaf } from '@fortawesome/free-solid-svg-icons';
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
  faLeaf=faLeaf
  faNode=faNodeJs
  techStack = [
    { name: 'Python', icon: faPython, delay: '0s' },
    { name: 'Java', icon: faJava, delay: '0.2s' },
    { name: 'JavaScript', icon:faJs, delay: '0.4s' },
    { name: 'SQL', icon: faDatabase, delay: '0.8s' },
    { name: 'MongoDB', icon: faLeaf, delay: '1s' },
    { name: 'React', icon: faReact, delay: '1.2s' },
    { name: 'Angular', icon: faAngular, delay: '1.4s' }
  ];
}