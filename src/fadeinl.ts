import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInLeft = trigger('fadeInLeft', [
    state('hidden', style({ opacity: 0, transform: 'translateX(-50px)' })),
    state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('hidden => visible', animate('1200ms ease-out'))
  ]);