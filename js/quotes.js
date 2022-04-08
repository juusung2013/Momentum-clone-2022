const quotes = [
  {
    quote: "격언은 결코 새로운 이야기는 아니지만 항상 위안을 준다.",
    author: "귀스타브 플로베르",
  },
  {
    quote: "내 자신의 무식을 아는 것은 지식으로의 첫걸음이다.",
    author: "조지 고든 바이런",
  },
  {
    quote: "엉터리로 배운 사람은 아무것도 모르는 사람보다 어리석다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "잘 모르고 무식한 사람이 신념을 가지면 무섭습니다.",
    author: "이경규",
  },
  {
    quote: "겪어보지 못한 자에게 전쟁이란 달콤한 것이다.",
    author: "에라스무스",
  },
  {
    quote:
      "옛날에는 나라를 위해 죽는 것이 멋지고 좋은 일이라고들 했다. 하지만 현대전에서 당신의 죽음은 멋지지도 좋지도 않다. 아무 이유 없이 개처럼 죽을 뿐이다.",
    author: "어니스트 헤밍웨이",
  },
  {
    quote:
      "인터넷에 올라온 명언들의 문제점은 그것이 진짜인지 알 수 없다는 것이다.(?)",
    author: "에이브러햄 링컨(?)",
  },
  {
    quote: "개가 짖어도 기차는 달릴 수밖에 없다.",
    author: "김영삼",
  },
  {
    quote:
      "경험은 소와 같다. 그 소는 10년 동안 매일 기차가 그 앞을 지나가는 것을 본다. 소에게 언제 기차가 오는지를 물으면 소는 대답하지 못할 것이다.",
    author: "마우리시오 포체티노",
  },
  {
    quote: "과거를 기억 못하는 이들은 과거를 반복하기 마련이다.",
    author: "조지 산타야나",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
