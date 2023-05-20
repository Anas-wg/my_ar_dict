import { CoreCompoent } from "../core/coreComponent";

export default class About extends CoreCompoent{
  render(){
    this.el.innerHTML = /* HTML */`
    <div class="about">
        <a class = "gitHub" href = 'https://github.com/Anas-wg' target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="100" height="100"/>
          <p>GitHub</p>
        </a>
        <a class="velog" href = 'https://velog.io/@false90' target="_blank">
          <img src="https://images.velog.io/images/kim-mg/post/b6928585-e245-4e5f-b878-0bbf278e5886/velog_logo.png" width="100"/>
          <p>Development Process</p>
        </a>
        <a class="email" href = 'https://mail.google.com/mail/?view=cm&fs=1&to=wg12181218@gmai.com' target="_blank">
          <img src="https://workspace.google.com/static/img/products/png/gmail.png?cache=f50ecb6" width="100" height="100"/>
          <p>E-mail</p>
        </a>
      </div>
    `
  }
}