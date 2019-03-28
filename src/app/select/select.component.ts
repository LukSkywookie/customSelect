import { Component, OnInit, Input, HostListener, ElementRef, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true }
  ]
})

export class SelectComponent implements OnInit  {

  selectExpanded: boolean = false;
  value: any;
  propagateChange = null;
  currentSelected: string = 'Wybierz kategorie';
  
  @Input() dataArray: any[];
  @Input() separator: boolean = false;
  @Output() objectType = new EventEmitter();

  @HostListener('document:click', ['$event', '$event.target']) clickedOutside(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return false;
    }
    const clickedInside = this.el.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.selectExpanded = false;
    }
  }
  

  /* *** Konstruktor *** */
  constructor(public el: ElementRef) { }
  /* *** /Konstruktor *** */


  expandDropdown(event) {
    event.stopPropagation();
    event.preventDefault();
    this.selectExpanded = !this.selectExpanded;
    this.listAnimation();
  }

  listAnimation() {
    const elements = document.querySelectorAll('.custom-select_options li');
    const listCount = elements.length;

    elements.forEach(element => {
      element.classList.remove('animation-deal');
    });
    
    for (let i = 0; i < listCount; i++) {
      setTimeout(() => {
        const index = i + 1;
        document.querySelector('.custom-select_options li:nth-child(' + index + ')').setAttribute('class', 'animation-deal');
      }, i * 60);
    }
  }

  selectCategory(category): void {
    this.value = category;
    this.currentSelected = this.value.label;
    this.selectExpanded = !this.selectExpanded;
    this.objectType.emit(this.value.objectType);
  }

  ngOnInit() {
  }
}
