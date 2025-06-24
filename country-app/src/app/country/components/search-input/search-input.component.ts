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
  // linkedSignal to set up a signal with a value
  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    // when the effect is detected launch the signal
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());

    // every time there is change in the effect, this function is launched

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
