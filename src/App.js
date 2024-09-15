/* App.js 는 바뀌는 내용들을 router-view 라는 태그를 만들어서
그 태그 안에 밀어넣을 예정
 */

import { CoreCompoent } from "./core/coreComponent";
import TheHeader from "./components/TheHeader";


// coreComponent를 확장(동일한 구조)
export default class App extends CoreCompoent{
  render(){
    // router-view 태그 생성
    const routerView = document.createElement('router-view')
    // this.el은 tagName에 따라 만들어지는 태그, 그안에 router-view 태그를 삽입
    this.el.append(
      new TheHeader().el,
      // new SearchBar().el,
      routerView
    )
  }
}
