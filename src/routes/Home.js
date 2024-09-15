import { CoreCompoent } from "../core/coreComponent";
import WordList from "../components/WordList";
import Search from "./Serach";


export default class Home extends CoreCompoent {
  render(){
    this.el.innerHTML = /* HTML */`
    `
    this.el.append(
      new WordList().el,
    )
  }
}