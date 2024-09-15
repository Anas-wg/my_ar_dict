## 아랍어 단어장 구현하기 프로젝트

## [Link: Al-Klimat](https://my-ar-dict.vercel.app/#/)

![](https://velog.velcdn.com/images/false90/post/973404ff-5a83-4744-9df7-f76834a9361c/image.png)

### 목차
1. [Inspired](#inspired)
2. [Function Structure](#function-structure)
3. [필요한 기능](#필요한-기능)
4. [단어 데이터](#단어-데이터)


### Inspired
FASTCAMPUS 3rd Project: OMdB Movie Search Site


[GitHub Repo Link](https://github.com/Anas-wg/vanillaJS-movie-app)


### 계발 계기
아랍어과 학생들은 단어를 공부할때,
명사의 경우 단수와 복수형을,   
동사의 경우 완료형과 미완료형을 같이 공부하기를 원함.




### 개발 과정 기록 장소

"개발 과정에서 에러를 어떻게 처리하고,  어떤 의도를 갖고 코드를 만들었는가"   
에 대해서는 바로 밑의 velog 에서 확인 가능합니다  
[velog Link](https://velog.io/@false90)


### Function Structure

<img src ="https://velog.velcdn.com/images/false90/post/58cd23dc-1fd6-4f56-a131-2bf94b7b1541/image.jpeg" width= 300 height= 300>

### 필요한 기능
- Main Page
사용자가 마주할 첫 화면이 될 페이지이다.
1. Header에 Navigation Bar 가 필요하다
	- 메인페이지, 명사,동사,About 페이지로 이동하는 기능
2. 단어를 검색할 수 있는 SearchBar 가 필요하다
	- 한글을 검색하면 일치하는 뜻을 가진 아랍어 단어를 보여주는 기능
3. 품사에 관계없이 단어와 그 단어가 가진 뜻을 보여주는 것이 필요하다
	- 단어 : 의미 형태의 데이터를 HTML상에 렌더링 하는 기능
    
- Noun/Verb Page
Main 과 비슷한 구조를 갖는다.
그러나 차이는 
3. 명사/동사만 보여주는 것이 필요하다
	- 명사/동사를 전체 단어에서 분류하여 이를 보여주는 기능
    
- About Page
1. 역시나 다른 페이지로 이동하기 위해 NavBar 가 필요하다.
2. 내 깃헙으로 넘어갈 수 있어야 한다.
3. 메일 주소를 클릭하면 바로 구글 메일을 작성할 수 있어야 한다.

### 단어 데이터

> [Gist Link](https://gist.github.com/Anas-wg/e55fcb800ebf6c65dea8c92b14dd7521)

- 데이터 형식
```json
 {
    "id": 1,
    "mean": "방향,방면",
    "single": "نحو",
    "plural": "أَنْحَاء",
    "example": "وبذلك كان قد توجه من جديد في طريقه نحو المدينة",
    "exmean": "다시 새롭게 도시를 향해 길에서 걸어갔다",
    "part": "noun",
    "appendix": ""
  },
```
단어 데이터 파일에서 단어를 가져오는 형식으로 만들어보고,

그다음 Gist 에 올린이상 주소를 활용해서 API 처럼 활용이 가능하기 때문에
추후 개선을 하는 방향으로 진행할 예정이다.
