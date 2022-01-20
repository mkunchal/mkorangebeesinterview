import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IMember } from '../framework/models/iMember';
import { ApiService } from '../framework/services/api/api.service';
import { Router } from '@angular/router';
import { AlertsService } from '../framework/services/alerts/alerts.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {

  emailIds = [
    {rawValue: 0, userValue: '0'},
    {rawValue: 1, userValue: '1'},
    {rawValue: 2, userValue: '2'},
    {rawValue: 3, userValue: '3'},
    {rawValue: 4, userValue: '4'},
  ];

  inputGroup: FormGroup;
  emailIdControl = new FormControl('', Validators.required);
  descriptionAlertValidate = false;

  emailAlertValidate = false;
  invalidEmailValidate = false;

  isLoading = false;
  constructor(public formBuilder: FormBuilder, private apiService: ApiService, private router: Router, private alerts: AlertsService) { 
    this.inputGroup = this.formBuilder.group({
      emailAddress: ['', Validators.email],
      isPrimary: [false],
      emailTypeId: this.emailIdControl,
      description: ['', Validators.required]
    });
  }
  ngAfterViewInit() {
    this.inputGroup.valueChanges.subscribe(value => {
      this.setDangerValues();
    });
  }
  // - MARK - Built this method due to a bug in Typescript where passing this through an *ngIf for the danger values caused there to be the possibility of null. This provides good accuracy for the error text on the form. 
  setDangerValues() {
    if (this.inputGroup.contains('emailAddress') && this.inputGroup.contains('description')) {
      var emailAddressInput = this.inputGroup.get('emailAddress')!;
      var descriptionInput = this.inputGroup.get('description')!;
      // For Email Address Errors
      if (emailAddressInput.errors) {
        var emailErrors = emailAddressInput.errors!;
        if (emailErrors.required) {
          this.emailAlertValidate = true;
        } else {
          this.emailAlertValidate = false;
        }
        if (emailErrors.email) {
          this.invalidEmailValidate = true;
        } else {
          this.invalidEmailValidate = false;
        }
      } else {
        this.invalidEmailValidate = false;
        this.emailAlertValidate = false;
      }
      // For Description Erros
      if (descriptionInput.errors) {
        var descriptionErrors = descriptionInput.errors!;
        if (descriptionErrors.required) {
          this.descriptionAlertValidate = true;
        } else {
          this.descriptionAlertValidate = false;
        }
      } else {
        this.descriptionAlertValidate = false;
      }


    }
  }
  // - MARK - Form Action checking for valid form input first, then saves the form data as an Interface with the timeCreated variable. Then saved through the Global API service. The error will get called which displays alert and redirects back to the display component.
  inputData() {
    if (this.inputGroup.valid) {
      const inputValue: IMember = this.inputGroup.value;
      inputValue.timeCreated = Date.now();
      this.isLoading = true;
      this.apiService.addMember(inputValue)
        .subscribe(
          member => {
          console.log('Saved Properly');
          console.log(member);
          this.isLoading = false;
          },
          error => {
            this.alerts.displayAlert('Invalid API, here is Dummy Member Data');
            this.isLoading = false;
            this.router.navigate(['']);
          },
          () => {
            // Will Not get called since this is when a request is complete.
          }
        )
    } else {
      // This is to display validators just in case.
      this.inputGroup.markAsTouched();
    }
  }



}
