import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-50px)' }), // Start position
    animate('1300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })) // End position
  ]),
  transition(':leave', [
    animate('1000ms ease-in', style({ opacity: 0, transform: 'translateX(50px)' }))
  ])
]);
