import { CoreCompoent } from "../core/coreComponent";
import { DATA } from "../worddata";


export default class WordList extends CoreCompoent {

  render() {
    const data = DATA
    this.el.innerHTML = /* html */`
        <ul>
        ${data
        .map(function (element) {
          return `
            <li id=${element.id} class="unchecked">
                <input type="checkbox" class="unchecked">
                <span class="arabic">${element.single} ${element.plural ? "-" + element.plural : ""}</span>
                <span class="korean">${element.mean}</span>
            </li>
            `
        }).join('')}
        </ul>
    `

    const inputEls = this.el.querySelectorAll(".unchecked")
    inputEls.forEach(element => {
      element.addEventListener("change", () => {
        element.classList.toggle("checked")
      })
    });
  }
}





