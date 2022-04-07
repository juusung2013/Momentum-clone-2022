const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  //JS에서 CSS 내용 수정 가능
  h1.style.color = "blue";

  console.log("title was clicked!");
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is Gone!";
}

function hnadleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI!");
}

function handleWindowOnline() {
  alert("All Good!");
}

//클릭(event) 하면 handleTitleClick 함수 실행
//handleTitleClick() 괄호 붙여버리면 클릭 상관없이 바로 실행됨
h1.addEventListener("click", handleTitleClick);
// = title.onclick = handleTitleClick;
//

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

//찾고 싶은 element 검색 방법
//h1 html element mdn 검색 후, Web APIs 포함된 사이트 들어가기

window.addEventListener("resize", hnadleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
