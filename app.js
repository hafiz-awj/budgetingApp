const afterEnteringName = () => {
  let name = document.getElementById("name");
  if (name.value !== "") {
    let div1 = document.getElementById("div1");
    div1.style.display = "none";
    let div2 = document.getElementById("div2");
    div2.style.display = "flex";
    let div3 = document.getElementById("div3");
    div3.style.display = "none";
    let welcome = div2.querySelector("p");
    welcome.innerHTML = `Welcome <strong> ${name.value} </strong>`;
  } else {
  }
};
const afterEnteringBudget = () => {
  let name = document.getElementById("name");
  let budget = document.getElementById("monthly-budget");
  let remainingBudget = document.getElementById("div3-remaining-budget");
  let totalExpenses = document.getElementById("div3-total-expenses");
  if (budget.value > 0) {
    let div1 = document.getElementById("div1");
    div1.style.display = "none";
    let div2 = document.getElementById("div2");
    div2.style.display = "none";
    let div3 = document.getElementById("div3");
    div3.style.display = "block";
    let hiName = document.getElementById("div3-name");
    hiName.innerHTML = `Hi <br>"<strong> ${name.value} </strong>"`;
    let yourBudget = document.getElementById("div3-budget");
    yourBudget.innerHTML = `Your total budget for this month is <br>" <strong> ${budget.value} </strong>"`;
    remainingBudget.innerHTML = `Your remaining budget for this month is <br> "<strong> ${remainingBudget.value} </strong>"`;
    totalExpenses.innerHTML = `Your total expenses reach to <br> "<strong>${totalExpenses.value}</strong>"`;
  } else {
  }
};

const expenseButton = () => {
  let div1 = document.getElementById("div1");
  div1.style.display = "none";
  let div2 = document.getElementById("div2");
  div2.style.display = "none";
  let div3 = document.getElementById("div3");
  div3.style.display = "none";
  let div4 = document.getElementById("div4");
  div4.style.display = "block";
};

// Holding Expenses

let myExpenses = [];
const addExpense = () => {
  let category = document.getElementById("category").value;
  let amount = document.getElementById("amount").value;
  let date = document.getElementById("date").value;
  let description = document.getElementById("desc").value;
  if (!date) {
    alert("Date must be filled");
  } else {
    if (category !== "" && amount > 0 && description !== "") {
      let div4 = document.getElementById("div4");
      div4.style.display = "none";
      let div3 = document.getElementById("div3");
      div3.style.display = "block";
      const expenses = {
        category,
        amount,
        date,
        description,
      };
      myExpenses.push(expenses);
    } else if (category === "") {
      alert("Select a valid category");
    } else if (amount <= 0) {
      alert("Enter a valid amount");
    } else {
      alert("Enter valid description");
    }
  }
};
