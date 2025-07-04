import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  //receive the info
  countries = input.required<Country[]>();

  errorMessage = input<string | null | unknown>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
