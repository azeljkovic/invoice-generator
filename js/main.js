let amount = document.getElementById("amount-value");
let washCarButton = document.getElementById("wash-car");
let taskList = document.getElementById("tasks");

washCarButton.addEventListener("click", updateAmount);
washCarButton.addEventListener("click", function(){renderList("Wash Car")});


function updateAmount() {
  amount.innerHTML = "$10";
}


function renderList(activity) {
  if (!taskList.textContent.includes(activity)){
    taskList.innerHTML += `<p>${activity}</p>`;
  }
}

amount.innerHTML = "$0";
console.log(amount);
