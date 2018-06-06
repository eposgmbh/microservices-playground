import { Component } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { environment } from '../environments/environment';
import { LoadingIndicatorService } from './loading-indicator.service';
import { routerTransitionAnimation } from './router-transition.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransitionAnimation]
})
export class AppComponent {
  environmentName = environment.name;
  apiGatewayUri = environment.apiGatewayUri;
  isLoading = false;
  panelOpenState = false;
  selectedValue: string;

  constructor(
    private loadingIndicatorService: LoadingIndicatorService,
    private snackBar: MatSnackBar
  ) {
    loadingIndicatorService.appComponent = this;
  }
}
