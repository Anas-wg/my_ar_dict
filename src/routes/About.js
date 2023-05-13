import { CoreCompoent } from "../core/coreComponent";

export default class About extends CoreCompoent{
  render(){
    this.el.innerHTML = /* HTML */`
    <h1>About Me</h1>
    <ul>
      <li><a href = '#'>My GitHub link</a></li>
      <li><a href = '#'>My devlog</a></li>
      <li><a href = '#'>wg12181218@gmail.com</a></li>
    </ul>
    `
  }
}