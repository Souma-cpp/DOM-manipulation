console.log("hello from javascript");

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("are you Soumaditya ?");
});

btn.addEventListener("mouseover", () => {
  console.log("did you just hover over the text ?");
});

btn.addEventListener("dblclick", () => {
  console.log("hey did you just clicked twice ?");
});

var tea_list = document.querySelector(".tea_list");
tea_list.addEventListener("click", (event) => {
  if (event.target && event.target.matches(".list")) {
    alert(`you selected ${event.target.textContent}`);
  }
});
