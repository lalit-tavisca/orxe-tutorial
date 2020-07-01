import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appAppNot]'
})
export class AppNotDirective {

  @Input() set appAppNot(condition: boolean) {
    !condition ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { 
    console.log(this.templateRef);
    
  }

}
