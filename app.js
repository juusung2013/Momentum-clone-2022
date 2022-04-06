const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  //JS에서 CSS 내용 수정 가능
  title.style.color = "blue";

  console.log("title was clicked!");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is Gone!";
}

//클릭(event) 하면 handleTitleClick 함수 실행
//handleTitleClick() 괄호 붙여버리면 클릭 상관없이 바로 실행됨
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

//찾고 싶은 element 검색 방법
//h1 html element mdn 검색 후, Web APIs 포함된 사이트 들어가기
