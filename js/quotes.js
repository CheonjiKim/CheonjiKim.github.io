// 명언을 10개 찾아오라고 했는데, 어떤 명언이 좋을 지 모르니 일단 네이버에서 아무거나 가져오자.

const quotes = [
  {
    quote: "스스로를 신뢰하는 순간 어떻게 살아야 할지 깨닫게 된다.",
    author: "요한 볼프강 폰 괴테",
  },
  {
    quote: "여가는 철학의 어머니다.",
    author: "토마스 홉스",
  },
  {
    quote: "역경은 누가 진정한 친구인지 가르쳐준다.",
    author: "로이스 맥마스터 부욜",
  },
  {
    quote: "시간은 인간이 쓸 수 있는 가장 값진 것이다.",
    author: "테오프라스토스",
  },
  {
    quote: "성공한 사람이 아니라 가치있는 사람이 되기 위해 힘쓰라.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "가장 큰 위험은 위험없는 삶이다.",
    author: "스티븐 코비",
  },
  {
    quote: "이별의 아픔 속에서만 사랑의 깊이를 알게 된다.",
    author: "조지 앨리엇",
  },
  {
    quote: "책 없는 방은 영혼 없는 육체와도 같다.",
    author: "키케로",
  },
  {
    quote: "자신을 사랑하는 법을 아는 것이 가장 위대한 사랑입니다.",
    author: "마이클 매서",
  },
  {
    quote: "교육은 최상의 노후 대비책이다.",
    author: "아리스토텔레스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todayQuote.quote}"`;
author.innerText = `<${todayQuote.author}>`;
