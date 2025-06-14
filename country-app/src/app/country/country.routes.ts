import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from '../shared/pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      { path: 'by-capital', component: ByCapitalPageComponent },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
  // {
  //   path: 'country',
  // },
  // {
  //   path: '**',
  //   redirectTo: '',
  // },
];

export default countryRoutes;
