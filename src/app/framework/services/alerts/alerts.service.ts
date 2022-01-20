import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Injectable()
export class AlertsService {
  defaultHorizontalPosition: MatSnackBarHorizontalPosition = 'end';
  defaultVerticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private snackBar: MatSnackBar) { }
  // - MARK - Displays a Mat Snack Bar Alert on any component with the SharedModule
  displayAlert(errMessage: string): void {
    this.snackBar.open(errMessage, 'Close', {
      horizontalPosition: this.defaultHorizontalPosition,
      verticalPosition: this.defaultVerticalPosition
    });
  }
}
