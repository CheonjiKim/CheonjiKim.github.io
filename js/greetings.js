const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //  str만 있는 변수는 대문자로만 쓰는 관행이 있다고 한다.
const USERNAME_KEY = "username"; // 팁 : str이 반복되면 실수를 줄이기 위해서 변수를 만들면 좋다.

function onLoginSubmit(event) {
  // submit을 눌렀을 때 실행될 함수이다.
  event.preventDefault(); // submit해도 새로고침되지 않는다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello, ${username}.`; //greeting.innerText = "Hello " + username; 위와 기능은 같다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 인풋 창을 보여준다.
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
