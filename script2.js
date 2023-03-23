const formSendMsg = document.querySelector(".form-send");
formSendMsg.addEventListener("submit", newMessage);

function newMessage(event) {
  event.preventDefault();

  msgTextInput = document.querySelector("#msg-input");
  if (msgTextInput.value.length == 0) {
    alert("Insira uma mensagem válida!");
  } else {
    createMsgElement();
    msgTextInput.value = "";
  }
}

function createMsgElement() {
  msgComponent = document.createElement("div");
  msgComponent.classList.add("msg-component");
  msgComponent.classList.add("msg-you");

  msgLabel = document.createElement("div");
  msgLabel.classList.add("msg-user");
  userName = document.createTextNode("Você diz:");
  msgLabel.appendChild(userName);

  msgTextInput = document.querySelector("#msg-input");
  msgContent = document.createElement("div");
  msgContent.classList.add("msg-content");
  msgText = document.createTextNode(msgTextInput.value);
  msgContent.appendChild(msgText);

  msgComponent.appendChild(msgLabel);
  msgComponent.appendChild(msgContent);

  const chatScreen = document.querySelector(".content");
  chatScreen.appendChild(msgComponent);
}
