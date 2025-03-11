import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocation} from '../housing-location/housing-location.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  isLoading = false;
  isSuccessful = false;
  isError = false;
  applyForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }
  submitApplication() { // POST Simulation
    this.isLoading = true;
    this.isSuccessful = false;
    this.isError = false;

    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );

    // Simulate an async operation
    setTimeout(() => {
      this.isLoading = false;
      const success = Math.random() > 0.5; // Simulate success or failure
      if (success) {
        this.isSuccessful = true;
      } else {
        this.isError = true;
      }
    }, 2000);  }
}