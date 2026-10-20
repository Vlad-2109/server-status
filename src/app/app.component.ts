import { Component } from '@angular/core';

import { HeaderComponent } from './header';
import { ServerStatusComponent } from './dashboard/server-status';
import { TrafficComponent } from './dashboard/traffic';
import { TicketsComponent } from './dashboard/tickets';
import { DashboardItemComponent } from './dashboard/dashboard-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent {}
