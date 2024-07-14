import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({ opacity: 1, display: 'grid', transform: 'translateY(-15px)' })
  ),
  state(
    'close',
    style({ opacity: 0, display: 'none', transform: 'translateY(0px)' })
  ),
  transition('open => close', [animate('0.3s ease-out')]),
  transition('close => open', [animate('0.4s ease-in')]),
]);
