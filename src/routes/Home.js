import { CoreCompoent } from "../core/coreComponent";


export default class Home extends CoreCompoent {
  render(){
    this.el.innerHTML = /* HTML */`
    <h1>Home Page</h1>
    `
  }
}