const formContainer = document.querySelector("form");
const spanH = document.querySelector("#spanH");
const spanM = document.querySelector("#spanM");
const spanS = document.querySelector("#spanS");

formContainer.addEventListener("submit", (event) => {
  event.preventDefault();

  let hourVal = formContainer.hour.value;
  let minVal = formContainer.minute.value;
  let secVal = formContainer.second.value;

  let hourStamp = hourVal * 60 * 60 * 1000;
  let minStamp = minVal * 60 * 1000;
  let secStamp = secVal * 1000;
  let sum = hourStamp + minStamp + secStamp;

  spanH.classList.add("shadow");
  spanM.classList.add("shadow");
  spanS.classList.add("shadow");

  const timer = setInterval(() => {
    sum -= 1000;
    let newTime = new Date(sum);
    
    spanS.innerHTML = newTime.getSeconds();
    spanM.innerHTML = newTime.getMinutes();
    spanH.innerHTML = newTime.getHours() - 1;
    if (sum === 0) {
      clearInterval(timer);
      new Audio("sound/sounds_snare.mp3").play();
      spanH.classList.remove("shadow");
      spanM.classList.remove("shadow");
      spanS.classList.remove("shadow");
    }
  }, 1000);
});
