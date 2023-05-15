import { CoreCompoent } from "../core/coreComponent";

export default class TheHeader extends CoreCompoent{
  constructor(){
    super({
      tagName : 'header'
    })
  }
  render(){
    this.el.innerHTML = /* HTML */`
    <h1 class="title">Al-Klimat</h1>
    <!-- hash 를 이용하여 페이지를 이동 -->
      <a href='#'>Home</a>
    <!-- hash 변경시마다 window 객체에 postate 이벤트 발생 -->
      <a href='#/noun'>Noun</a>
      <a href='#/verb'>Verb</a>
      <a href='#/about'>About</a>
      <a href='#/search'>🔎</a>
    `
  }
}