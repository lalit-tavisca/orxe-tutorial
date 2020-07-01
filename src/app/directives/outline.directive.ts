import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOutline]'
})
export class OutlineDirective {

  constructor(private _renderer: Renderer2, private _element: ElementRef ) { }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: any) {    
    this._outlineToggle(true);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: any) {    
    this._outlineToggle(false);
  }
  
  private _outlineToggle(apply: boolean) {
    console.log(this._element);
    if(apply){
      this._renderer.setStyle(this._element.nativeElement, 'border', 'solid black 1px' );
      this._renderer.setStyle(this._element.nativeElement, 'font-size', '10px' );
    } else {
      this._renderer.setStyle(this._element.nativeElement, 'border', '' );
      this._renderer.setStyle(this._element.nativeElement, 'font-size', '' );
    }
  }

}
