import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

  truncateText(text: string): string {
    if (text.length > 70) {
      return text.substring(0, 70) + '...';
    }
    return text;
  }
}
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
