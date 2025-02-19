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
  skills = [
    {
      category: "Programming Languages",
      items: ["C++", "Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      category: "Web Technologies",
      items: ["HTML5", "CSS", "React JS", "Node JS"],
    },
    {
      category: "Cloud Platforms",
      items: ["Amazon Web Services", "GCP", "Azure"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      category: "Frameworks and Tools",
      items: ["Git", "TensorFlow", "React", "Angular", "Flask","postman"],
    },
  ];
}