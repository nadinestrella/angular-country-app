import {
  Component,
  effect,
  input,
  linkedSignal,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  placeholder = input('Search');
  debounceTime = input(300);
  initialValue = input<string>('');

  value = output<string>();
  //linkedSignal para inicilizar una seña; con un valor
  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

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
