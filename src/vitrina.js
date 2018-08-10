import {Button} from './components/button/button';
import {Field} from "./components/field/field";

window.addEventListener('DOMContentLoaded', function () {
  let button = new Button({
    data: {
      text: 'Hello world'
    },
    node: document.querySelector('.root')
  });

  let field = new Field({
      data: {
        value: '',
        placeholder: 'Это плейсхолдер'
      }
  });

  button.render();
  field.render();
});