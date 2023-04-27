import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pokeball-selector-component',
  templateUrl: './pokeball-selector-component.component.html',
  styleUrls: ['./pokeball-selector-component.component.scss'],
})
export class PokeballSelectorComponentComponent implements OnInit {
  @Input() isDisabledButton: boolean = false;
  @Output() selectedAction = new EventEmitter<number>();

  pokeBalls: MenuItem[] = [
    {
      label: 'Let escape',
      command: () => this.selectedAction.emit(0),
    },
    {
      label: 'Throw Poké Ball',
      command: () => this.selectedAction.emit(25),
    },
    {
      label: 'Throw Ultra Ball',
      command: () => this.selectedAction.emit(70),
    },
    {
      label: 'Throw Master Ball',
      command: () => this.selectedAction.emit(100),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
