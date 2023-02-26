import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {
  @Output() reachedEnd:EventEmitter<boolean> = new EventEmitter();
  constructor(
    
  ) {

  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    const current = event.target as HTMLElement;
    const offset = current.offsetHeight;
    const height = current.scrollHeight;
    const top = (event.target as HTMLElement).scrollTop

    if(top> height-offset-1 ){
      this.reachedEnd.emit(true);
    }
  }
}
