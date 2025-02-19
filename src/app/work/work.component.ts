import { Component ,CUSTOM_ELEMENTS_SCHEMA ,ViewChild, AfterViewInit ,ElementRef,NgZone} from '@angular/core';
import { CommonModule } from '@angular/common';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

registerSwiperElements();
@Component({
  selector: 'app-work',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkComponent implements AfterViewInit{
  fagithub=faGithub
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;  
  works = [
    {
      title: 'Portfolio Website',
      description: 'A modern and sleek portfolio website built with Angular and MongoDB.',
      image: '/assets/portfolio.png',
      link: 'https://monishdevineni.netlify.app/'
    },
    {
      title: 'Image Captioning Web App using Gemini',
      description: 'A captioning and description of an uploaded image on this web application using Python Flask and LLM Model',
      image: 'assets/Image Captioning.png',
      link: 'https://github.com/monish-rgb/Image_Captioning_Web_App'
    },
    {
      title: 'Malware Classification Using CFGs',
      description: "This project deals with Ransomware PE binary executable files Control Flow Graphs(CFG's) are extracted from these files using IDA Pro tool. ",
      image: 'assets/CFG.png',
      link: 'https://github.com/monish-rgb/Malware-Classification-Using-CFG'
    },
    {
      title: 'Plant Disease Detection',
      description: 'Builded a Convolutional Neural Network model to detect plant diseases using TensorFlow and Keras.',
      image: 'assets/plantdisease.png',
      link: 'https://github.com/monish-rgb/ML-DL/tree/main/Plant%20Disease%20Detection'
    },
  ];

  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;

  swiperInstance: any;

  ngAfterViewInit() {
    this.swiperInstance = this.swiperEl.nativeElement.swiper;
    this.swiperInstance.params.speed = 800; // Smooth animation speed
    this.swiperInstance.update(); // Update the swiper instance
  }
  pauseSwiper = () => {
    if (this.swiperInstance) {
      console.log('pause')
      this.swiperInstance.autoplay.stop(); // Pause rotation when hovering
    }
  }
  resumeSwiper = () => {
    if (this.swiperInstance) {
      console.log('resume')
      this.swiperInstance.autoplay.start(); // Pause rotation when hovering
    }
  }
  
}