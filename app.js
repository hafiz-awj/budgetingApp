let myExpenses = [];
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
    alert("Write a valid name");
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
    remainingBudget.value = budget.value;
    totalExpenses.value = 0;
    yourBudget.innerHTML = `Your total budget for this month is <br>" <strong> ${budget.value} </strong>"`;
    remainingBudget.innerHTML = `Your remaining budget for this month is <br> "<strong> ${remainingBudget.value} </strong>"`;
    totalExpenses.innerHTML = `Your total expenses reach to <br> "<strong>${totalExpenses.value}</strong>"`;
  } else {
    alert("Enter valid budget");
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
      createExpenses();
      result();
    } else if (category === "") {
      alert("Select a valid category");
    } else if (amount <= 0) {
      alert("Enter a valid amount");
    } else {
      alert("Enter valid description");
    }
  }
};
const createExpenses = () => {
  const expenseElement = document.querySelector("main");
  expenseElement.innerHTML = "";
  myExpenses.forEach((expense, index) => {
    const expenseDiv = document.createElement("div");
    expenseDiv.innerHTML = `
    <div class="div3-expense-serial all-expenses"><h2><pre>   ${
      index + 1
    }</pre></h2><p>${expense.date}</p></div>
    <div class="all-expenses div3-expense-body">
      <h3><pre>${expense.category}                            Rs. ${
      expense.amount
    }</pre> </h3>
      <p>${expense.description}</p>
    </div>
    <button onclick="deleteExpense(${index})" class="all-expenses div3-expense-remove">Remove Expense</button>`;
    expenseDiv.id = "div3-expenses";
    expenseElement.appendChild(expenseDiv);
    expenseElement.style.marginTop = "150px";
  });
};

const deleteExpense = (index) => {
  myExpenses.splice(index, 1);
  createExpenses();
  result();
};

const calculations = () => {
  const budget = document.getElementById("monthly-budget").value;
  let totalExpenses = 0;
  let remainingBudget = budget;
  myExpenses.forEach((expense) => {
    totalExpenses += Number(expense.amount);
  });
  remainingBudget = remainingBudget - totalExpenses;
  return [totalExpenses, remainingBudget];
};

const result = () => {
  const [totalExpenses, remainingBudget] = calculations();
  const div3TotalExpenses = document.getElementById("div3-total-expenses");
  const div3RemainingBudget = document.getElementById("div3-remaining-budget");
  div3TotalExpenses.innerHTML = `Your total expenses reach to <br><strong>${totalExpenses}</strong>`;
  div3RemainingBudget.innerHTML = `Your remaining budget <br><strong>${remainingBudget}</strong>`;
};
