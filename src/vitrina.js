import {Button} from './components/button/button';
import {Field} from "./components/field/field";

window.addEventListener('DOMContentLoaded', function () {
  let button = new Button({
    data: {
      text: 'Просто кнопка'
    },
    node: document.querySelector('.root app-button')
  });

  let field = new Field({
      data: {
        value: '',
        placeholder: 'Это плейсхолдер'
      },
    node: document.querySelector('.root app-field')
  });

  button.render();
  field.render();
});