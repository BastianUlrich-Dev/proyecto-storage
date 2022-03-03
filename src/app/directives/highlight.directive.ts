import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  
  
  @HostListener('mouseleave') onMouseleave(){
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(
    private element: ElementRef
  ) { 
    // this.element.nativeElement.style.backgroundColor = 'red';
   }

}
