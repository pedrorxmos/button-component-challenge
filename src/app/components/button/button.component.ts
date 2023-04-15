import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() value?: string = 'Default';
  @Input() variant?: string;
  @Input() disableShadow?: any;
  @Input() disabled?: any;
  @Input() startIcon?: string;
  @Input() endIcon?: string;
  @Input() size?: string;
  @Input() color?: string;
}
