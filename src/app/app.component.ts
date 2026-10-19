import { Component } from '@angular/core';

import { HeaderComponent } from './header';
import { ServerStatusComponent } from './dashboard/server-status';
import { TrafficComponent } from './dashboard/traffic';
import { TicketsComponent } from './dashboard/tickets';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
