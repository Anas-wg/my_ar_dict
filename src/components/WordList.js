import { CoreCompoent } from "../core/coreComponent";
import { DATA } from "../worddata";

export default class WordList extends CoreCompoent {
  render(){
    const data = DATA
    this.el.innerHTML = /* html */`
      <div class="word">
        <ul>
        ${data
        .map(function (element) {
            return `
            <li class = "wordlist">
              <span>${element.single}</span>
              <span>${element.mean}</span>
            </li>
            `
            }).join('')}
        </ul> 
      </div>
    `
  }
}





