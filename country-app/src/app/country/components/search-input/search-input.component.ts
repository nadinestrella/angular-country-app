import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  placeholder = input('Search');
  value = output<string>();
  debounceTime = input(300);

  inputValue = signal<string>('');

  debounceEffect = effect((onCleanup) => {
    //cuando detecte el efecto dispara esta señal
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());

    //cada vez q hay un cambio en el effecto, se lanza esta func

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
