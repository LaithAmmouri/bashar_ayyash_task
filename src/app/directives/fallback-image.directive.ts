import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'img[fallback]'
})
export class FallbackImageDirective {
  @Input()
  @HostBinding('src')
  src: string = '';

  @Input() fallback: string = '';

  constructor() { }

  @HostListener('error')
  onError() {
    this.src = this.fallback;
  }
}
