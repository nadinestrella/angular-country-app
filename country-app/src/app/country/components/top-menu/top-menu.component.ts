import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ByCapitalPageComponent } from '../../../shared/pages/by-capital-page/by-capital-page.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'country-top-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenuComponent {}
