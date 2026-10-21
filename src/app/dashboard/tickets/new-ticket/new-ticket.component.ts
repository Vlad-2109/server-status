import { Component } from '@angular/core';

import { ButtonComponent } from '../../../shared/button';
import { ControlComponent } from '../../../shared/control';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {}
