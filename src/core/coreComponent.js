/* 
1. 핵심 컴포넌트 - html에서 출력할 수 있게 받아온 tagName,state,props를 받아와서
이를 출력
2. 라우팅 기능 - 해쉬값을 받아와서 이에 일치하는 js 파일을 출력
*/

// 1. 핵심 컴포넌트
export class CoreCompoent {
  constructor(payload = {}){
    const {
      tagName = 'div',
      state = {},
      props = {}
    } = payload
    // 받아온 TagName 대로 html에 태그를 생성
    this.el = document.createElement(tagName)
    this.state = state
    this.props = props
    this.render()
  }
  render(){
    // 이 render 함수를 다른 js 파일에서 활용해서 html 에 렌더링할 것들이 들어올 예정
  }
}

// 2. 라우팅 기능
function routeRender(routes){
  // 예외처리
  if(!location.hash) {
    history.replaceState(null,'','/#/')
  }

  const routerView = document.querySelector('router-view')
  // 주소의 hash 값과 쿼리스트링을 분리
  const [hash, querystring = ''] = location.hash.split('?')
  const query = querystring
    .split('&')
    .reduce((acc, cur)=> {
    // 'a=123' 을 = 기준으로 할당 -> cur = { key: a, value: 123 }
    const [key, value] = cur.split('=')
    acc[key] = value
    return acc
  }, {})

  // query 값이 history 객체의 state 값으로 할당 -> state: {a: '123', b: '456', c: '789'}
  history.replaceState(query,'')
  // 넘어오는 routes 로부터 hash 값 가져오기
  const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash))
  
  // 각 객체의 실제 출력물은 속에 component 속성
  // routerview 내용을 컴포넌트의 인스턴스의 el을 밀어넣기
  routerView.innerHTML = ``
  routerView.append(new currentRoute.component().el)
  //페이지 변경시 스크롤 최상단 고정
  window.scrollTo(0,0)
}

export function createRoute(routes) {
  return function(){
    window.addEventListener('popstate', ()=> {
      routeRender(routes)
    })
    routeRender(routes)
  }
}