const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  //JS에서 CSS 내용 수정 가능
  title.style.color = "blue";

  console.log("title was clicked!");
}

//클릭(event) 하면 handleTitleClick 함수 실행
//handleTitleClick() 괄호 붙여버리면 클릭 상관없이 바로 실행됨
title.addEventListener("click", handleTitleClick);
