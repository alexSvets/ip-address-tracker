import { validatIp } from "./helpers";

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector("button");

btn.addEventListener("click", getData);
ipInput.addEventListener("keydown", handleKey);

function getData() {
  if (validatIp(ipInput.value)) {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_p01a9XrAcvXeCXdxw5RENkTp0a9kU&ipAddress=${ipInput.value}`
    )
      .then((responce) => responce.json())
      .then(console.log);
  }
}

function handleKey(e) {
  if (e.key === "Enter") {
    getData();
  }
}
