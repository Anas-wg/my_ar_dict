// 보여줄 각 페이지의 경로와 해당하는 컴포넌트에 대한 Routes를 생성

import Home from "./Home";
import About from "./About";
import { createRoute } from "../core/coreComponent";

export default createRoute([
  {path: '#/', component: Home},
  {path: '#/about', component: About}
])