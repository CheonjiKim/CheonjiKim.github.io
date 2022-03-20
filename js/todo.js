const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // JSON.stringify()는 어떤 자료형이든 str으로 바꾸어준다.
  // JSON.parse()는 str을 다시 해당 자료형으로 바꾸어준다.
}

function deleteToDo(event) {
  // todolist에 2개 이상의 버튼이 있으면 한 버튼을 눌렀을 떄,
  // 그 버튼이 어떤 버튼인지를 알아야 한다.
  // console.dir(event)를 통해 내가 누른 버튼에 대한 단서를 찾아보자.
  //console.dir(event);
  // target항목에 parentElement라는 것을 선택하면 해당 버튼이 있는 li를 확인 할 수 있다!

  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  // toDo.id 는 number이고, li.id는 str이다. 이를 같은 number로 맞춰주어야 한다.
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; // span의 text를 newTodo로 할당한다.
  const button = document.createElement("button");
  button.innerText = "×";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDolistSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 현재 toDoInput.value를 변수에 담아둔다.
  toDoInput.value = ""; // toDoInput.value의 값을 ""로 채운다. newTodo가 비워지는 것은 아니다.
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDolistSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

//console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // 배열.forEach() 는 array각각의 item에 대해서 func을 실행하도록 해준다.
  // addEventListener가 event에 대한 정보를 주듯이, forEach()또한 array의 각각 item에 대한 값을 argument에 넘겨준다.
}
