import { CoreCompoent } from "../core/coreComponent";
import { DATA } from "../worddata";


export default class Verb extends CoreCompoent {
  render(){
    const data = DATA
    this.el.innerHTML = /* html */`
      <div class="word">
        <ul>
        ${data
        .filter(data => data.part === "verb")
        .map(function (element) {
            return `
            <li class = "wordlist">
            <span>${element.single} ${element.plural ? "-"+ element.plural : " "}</span>
              <span>${element.mean}</span>
            </li>
            `
            }).join('')}
        </ul> 
      </div>
    `
  }
}