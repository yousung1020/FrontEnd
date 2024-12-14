// 검색창 요소(.search) 찾기
const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector("input");

// 검색창 요소를 클릭하면 실행
searchEl.addEventListener("click", function() {
  searchInputEl.focus();
})

//검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener("focus", function() {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
})

//검색창 요소 내부 실제 input 요소에 포커스 해제되면 실행(블러)
searchInputEl.addEventListener("blur", function() {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
})

const badgeEl = document.querySelector("header .badges");

window.addEventListener('scroll', function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
})

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
})

new Swiper(".notice .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true
});

new Swiper(".promotion .swiper", {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소
    clickable: true // 사용자의 페이지 번호 제어 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev", // 이전 버튼 요소
    nextEl: ".promotion .swiper-button-next" // 다음 버튼 요소
  }
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

// click the toggle botton
promotionToggleBtn.addEventListener("click", function() {
  if(promotionEl.classList.contains("hide")){
    promotionEl.classList.remove("hide");
  }
  else {
    promotionEl.classList.add("hide");
  }
});

