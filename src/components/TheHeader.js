import { CoreCompoent } from "../core/coreComponent";

export default class TheHeader extends CoreCompoent{
  constructor(){
    super({
      tagName : 'header',
      // state data 에 menus 배열을 전달
      // menus 배열에는 라우팅될 페이지와 주소(href)을 저장
      state: {
        menus: [
          {
            name: 'Home',
            href: '#/'
          },
          {
            name: 'Noun',
            href: '#/noun'
          },
          {
            name: 'Verb',
            href: '#/verb'
          },
          {
            name: 'About',
            href: '#/about'
          },
          {
            name: '🔎',
            href: '#/search'
          },
        ]
      }
    })

    // 페이지 변화가 있을때마다 렌더링
    window.addEventListener('popstate',()=> {
      this.render()
    })
  }

  render(){
    this.el.innerHTML = /* HTML */`
    <h1>Al-Klimat</h1>
        <ul>
          <!-- State의 menu 배열을 map 메서드를 이용하여 콜백함수를 호출 -->
          <!-- 콜백함수는 배열내 href 속성과 location 객체의 hash 값을 비교 -->
          ${this.state.menus.map(menu =>{
            const href = menu.href.split('#/')[1]
            const hash = location.hash.split('#/')[1]
            // 만약 hash값과 같은 href 속성을 가진 페이지에 사용자가 있음 -> isActive 붙여주기
            const isActive = href === hash
            // console.log(`href: ${href},hash : ${hash}`)
            return /* html */`
              <li>
                <a
                  class = "${isActive ? 'active' : ''}"
                  href = "${menu.href}">
                ${menu.name}
                </a>
              </li>
            `
          }).join('')}
        </ul>
    `  
  }

}