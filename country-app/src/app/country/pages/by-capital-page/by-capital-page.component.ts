import { Component, inject } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  //injectamos el country Service
  countryService = inject(CountryService);

  //creamos un metodo
  onSearch(query: string) {
    console.log({ query });
    //necesario para lanzar la peticion
    this.countryService.searchByCapital(query).subscribe((resp) => {
      console.log(resp);
    });
  }
}
