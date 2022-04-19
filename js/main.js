let amount = document.getElementById("amount-value");
let washCarButton = document.getElementById("wash-car");
let mowLawnButton = document.getElementById("mow-lawn");
let pullWeedsButton = document.getElementById("pull-weeds");
let taskList = document.getElementById("individual-tasks");
let totalList = document.getElementById("individual-totals");
let notes = document.getElementById("notes");

let totalAmount = 0;

washCarButton.addEventListener("click", function () {
  updatePage("Wash Car")
});
mowLawnButton.addEventListener("click", function () {
  updatePage("Mow Lawn")
});
pullWeedsButton.addEventListener("click", function () {
  updatePage("Pull Weeds")
});


function updatePage(activity) {
  if (!taskList.textContent.includes(activity)) {
    taskList.innerHTML += `<p>${activity}</p>`;
    notes.innerHTML = "<p>NOTES</p><p>We accept cash, credit card, or PayPal</p>";
    switch (activity) {
      case "Wash Car":
        totalAmount += 10;
        totalList.innerHTML += `<p>$10</p>`;
        break;
      case "Mow Lawn":
        totalAmount += 20;
        totalList.innerHTML += `<p>$20</p>`;
        break;
      case "Pull Weeds":
        totalList.innerHTML += `<p>$30</p>`;
        totalAmount += 30;
        break;
    }
    amount.innerHTML = `$${totalAmount}`;
    // notes.innerHTML += "<p>We accept cash, credit card, or PayPal</p>";
  }
}
