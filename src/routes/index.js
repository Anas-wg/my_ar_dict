// 보여줄 각 페이지의 경로와 해당하는 컴포넌트에 대한 Routes를 생성

import Home from "./Home";
import About from "./About";
import Noun from "./Noun";
import Verb from "./Verb";
import { createRoute } from "../core/coreComponent";
import Search from "./Serach";

export default createRoute([
  {path: '#/', component: Home},
  {path: '#/noun', component: Noun},
  {path: '#/verb', component: Verb},
  {path: '#/about', component: About},
  {path: '#/search', component: Search},

])