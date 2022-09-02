import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public label: string = 'Button Label';
  @Input() public type: 'primary' | 'secondary' = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
