import { CoreCompoent } from "../core/coreComponent";
import { DATA } from "../worddata";

export default class Search extends CoreCompoent {
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = /* html */`
    <div id="searcharea">
    <input
        placeholder ="Enter the word mean"
      >
      <button id="lang">
        KR
      </button>
    </div>
      <div>
        <ul>
          <li class="result">단어를 검색해 보세요!</li>
        </ul>
      </div>

    `
    const inputEl = this.el.querySelector('input')
    const resultEl = this.el.querySelector('.result')
    const langSelectBtnEl = this.el.querySelector('#lang')
  
    // 언어선택 버튼 - KR을 기본값으로 두고, class 에 "AR"이 추가되면 버튼의 내용이 AR 로 바뀌도록함
    langSelectBtnEl.addEventListener('click', () => {
      if (langSelectBtnEl.classList)
        // toggle 을 사용하여 자유로운 전환이 가능하도록 함
        langSelectBtnEl.classList.toggle('AR')
      langSelectBtnEl.innerHTML = (langSelectBtnEl.classList == "AR")
        ? `AR`
        : `KR`
    })


    inputEl.addEventListener('input', () => {
      DATA.map(item => {
        // 만약 class에 "AR"이 활성화된 상태라면
        if (langSelectBtnEl.classList == "AR") {
          // 이때는 input value 와 일치하는 아랍어 단어를 찾도록 함
          // 단수와 복수, 현재와 미완료형과 일치하는 모든 단어를 찾을 수 있도록 OR 연산자를 사용함
          if (item.single.indexOf(inputEl.value) !== -1 || item.plural.indexOf(inputEl.value) !== -1) {
            resultEl.innerHTML = `
            ${item.single} - ${item.plural} : ${item.mean}
            `}
        }
        // AR 이 없는 경우 = KR
        if (item.mean.indexOf(inputEl.value) !== -1) {
          resultEl.innerHTML = `
            ${item.single} - ${item.plural} : ${item.mean}
            `
        }
      })
    })
  }
}