import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  imports: [],
  template: `<p>by-capital-page works!</p>`,
  styleUrl: './by-capital-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent { }
