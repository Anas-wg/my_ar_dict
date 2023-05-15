import { CoreCompoent } from "../core/coreComponent";
import { DATA } from "../worddata";

export default class Search extends CoreCompoent {
  render(){
    this.el.classList.add('search')
    this.el.innerHTML = /* html */`
      <input
        placeholder ="Enter the word mean"
      >
      <button>
        Search!
      </button>
      <div>
        <ul>
          <li class="result">값이 없다면 변하지 않음</li>
        </ul>
      </div>

    `
    const inputEl = this.el.querySelector('input')
    const btnEl = this.el.querySelector('button')
    const resultEl = this.el.querySelector('.result')
    btnEl.addEventListener("click",()=> {
      DATA
        .filter(data => data.mean === inputEl.value)
        .map(function(element){
          resultEl.innerHTML = /* html */`
          ${element.single} : ${element.mean}
          `
        })

    })
  }
}