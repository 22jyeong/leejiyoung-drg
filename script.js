//인클루드--건들지 말기

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};


// 아코디언


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// 사이드바


function show() {
  document.getElementById('sidebar').classList.toggle('act');
}

function show() {
  document.getElementById('sidebar').classList.toggle('act')
}
// sidebar id 요소에 active 클래스를 넣었다 뺐다 하라.


// 메인 스와이퍼

var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    draggable: true,
  },

  autoplay: {
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
    loop: true,

  },
});

//하단 이벤트 슬라이드

var swiper01 = new Swiper01(".mySwiper01", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
    loop: true,

  },

});


// 롤링 슬라이드

$(window).on('load', function () {
  setFlowBanner();
})

function setFlowBanner() {
  const $wrap = $('.flow_banner');
  const $list = $('.flow_banner .list');
  let wrapWidth = $wrap.width();
  let listWidth = $list.width();
  const speed = 20; //1초에 몇픽셀 이동하는지 설정

  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct()

  //배너 실행 함수
  function flowBannerAct() {
    //무한 반복을 위해 리스트를 복제 후 배너에 추가
    if (listWidth < wrapWidth) {
      const listCount = Math.ceil(wrapWidth * 2 / listWidth);
      for (let i = 2; i < listCount; i++) {
        $clone = $clone.clone();
        $wrap.append($clone);
      }
    }
    $wrap.find('.list').css({
      'animation': `${listWidth / speed}s linear infinite flowRolling`
    });
  }

  // 마우스가 요소 위로 진입했을 때 일시정지
  $wrap.on('mouseenter', function () {
    $wrap.find('.list').css('animation-play-state', 'paused');
  });

  // 마우스가 요소에서 빠져나갈 때 재생
  $wrap.on('mouseleave', function () {
    $wrap.find('.list').css('animation-play-state', 'running');
  });
}


// 텍스트 롤링

function notice_scroll() {
  $('#rolling_notice li:first').slideUp(function () {
    $(this).appendTo($('#rolling_notice')).slideDown();
  });
}
setInterval(function () { notice_scroll() }, 3000);





