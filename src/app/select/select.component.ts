import { Component, OnInit, Input, HostListener, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { SelectInterface } from './select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {

  selectExpanded: boolean = false;

  selectHeight: boolean = false;

  @HostListener('document:click', ['$event', '$event.target']) clickedOutside(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return false;
    }
    const clickedInside = this.el.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.selectExpanded = false;
    }
  }

  @Input() options;

  @Input() objectType;

  @Input() currentSelected: string;
  @Output() currentSelectedChange = new EventEmitter();
  
  @Input() separator: boolean = true;

  @ViewChild("focusHandler") focusHandler: ElementRef;


  /* *** Konstruktor *** */
  constructor(public el: ElementRef) { }
  /* *** /Konstruktor *** */

  expandDropdown(event) {
    event.stopPropagation();
    event.preventDefault();
    this.selectExpanded = !this.selectExpanded;
    this.listAnimation();
  }

  getOptionLabel(category: SelectInterface) {
    this.currentSelectedChange.emit(category.objectType);
    this.selectExpanded = false;
    this.focusHandler.nativeElement.focus();
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

  ngOnInit() {
    this.currentSelected = 'Wybierz kategorię';
  }
}
