import { CoreCompoent } from "../core/coreComponent";
import WordList from "../components/WordList";


export default class Home extends CoreCompoent {
  render(){
    this.el.innerHTML = /* HTML */`
    <h1 class="title">Home Page</h1>
    `
    this.el.append(
      new WordList().el
    )
  }
}