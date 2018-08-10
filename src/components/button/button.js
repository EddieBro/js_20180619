import {Component} from '../component';
import style from './button.scss';

export class Button extends Component {
  render() {
    this.node.innerHTML = `<button class="btn">${this.data.text}</button>`;
  }

}
