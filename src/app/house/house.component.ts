import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {

}
