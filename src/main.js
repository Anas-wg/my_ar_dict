// html과 연결되는 JS 파일은 이거 하나,
// 따라서 가져오기와 내보내기를 통해 main.js 로 모든 데이터, 출력할 것들을 모아야함
// main.js 에선 라우터 기능을 할 App.js 를 가져오고, 이를 root div 에 출력하는 기능을 담당

import App from './App'
import createRoute from './routes/index'

const root = document.querySelector('#root')
root.append(new App().el)

createRoute()