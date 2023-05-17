import { CoreCompoent } from "../core/coreComponent";

export default class TheHeader extends CoreCompoent{
  constructor(){
    super({
      tagName : 'header',
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
    window.addEventListener('popstate',()=> {
      this.render()
    })
  }
  render(){
    this.el.innerHTML = /* HTML */`
    <h1>Al-Klimat</h1>
        <ul>
          ${this.state.menus.map(menu =>{
            const href = menu.href.split('#/')[1]
            const hash = location.hash.split('#/')[1]
            const isActive = href === hash
            console.log(href,hash)
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