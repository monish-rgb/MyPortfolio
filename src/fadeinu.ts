import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
    state('hidden', style({ opacity: 0, transform: 'translateY(50px)' })),
    state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('hidden => visible', animate('800ms ease-out'))
  ]);