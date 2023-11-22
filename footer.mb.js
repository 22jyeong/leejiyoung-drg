// 모바일 푸터 메뉴


// 현재는 과거의 미래일 수 있다. 현재는 미래의 과거일 수 있다.

// prev 과거 - current 현재 
//https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
// 현재 0인 y값을 과거 값으로 변경
let prevScrollpos = window.pageYOffset;
//onscroll 이벤트 - 마우스 스크롤을 사용하거나 브라우져 스크롤바를 움직이면 펑션 실행
window.onscroll = function () {

  // 변경된 y값을 현재값으로 어싸인
  let currentScrollpos = window.pageYOffset;

  // 과거y가 현재y보다 크면 true, 그러므로 스크롤을 올리면 true, prev의 초기값은 0
  // 좌표가 아래에서 위로 변경됬다면 true
  if (prevScrollpos > currentScrollpos) {
    // 네비가 보임
    document.getElementById("footer-menu").style.bottom = "0";
    // 좌표가 위에서 아래로 변경됬다면 false
    //prev가 current보다 작으면 false, 스크롤을 내리면 false
  } else {
    // 네비가 안보임
    document.getElementById("footer-menu").style.bottom = "-100px";
  }

  //prev 에 current 값 넘김, 현재의 좌표에서 변수 다시 초기화하고 여기서부터 다시 시작, 스크롤 할때마다 리셋
  prevScrollpos = currentScrollpos;

}

window.addEventListener('scroll', function () {
  var isScrollAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

  if (isScrollAtBottom) {

    document.getElementById("footer-menu").style.bottom = "0px";
    // 스크롤이 제일 밑으로 내려왔을 때 수행할 코드 작성
    // 예시: 새로운 데이터를 불러오는 AJAX 요청이나 추가적인 컨텐츠 보여주기 등
  }
});