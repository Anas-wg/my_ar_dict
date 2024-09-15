import { CoreCompoent } from "../core/coreComponent";
import { DATA } from "../worddata";


export default class Noun extends CoreCompoent {
  render(){
    const data = DATA
    this.el.innerHTML = /* html */`
      <div class="word">
        <ul>
        ${data
        .filter(data => data.part === "noun")
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