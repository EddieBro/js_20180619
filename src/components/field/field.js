import {Component} from '../component';
import style from './field.scss';

export class Field extends Component {
  render() {
    this.node.innerHTML = `
      <input type="text" class="input" placeholder="${this.data.placeholder}" value="${this.data.value}" >`;
  }
}
