let expenses = [];
let total_amount = 0;

const categorySelect = document.getElementById("category_select");
const amountInput = document.getElementById("amount_input");
const dateInput = document.getElementById("date_input");
const addbtn = document.getElementById("add_btn");
const expensesTableBody = document.getElementById("expenses-list");
const totalAmountCell = document.getElementById("total_amount");

addbtn.addEventListener('click',()=>{
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;
    if (category === ""){
        alert("Pleease select the category");
        return;
    }
    if (isNaN(amount) || amount<=0){
        alert("Please enter a valid amount");
        return;
    }
    if(date === ""){
        alert("Please select  a date");
        return;
    }
    expenses.push({category,amount,date});

    total_amount+=amount;
    totalAmountCell.textContent = total_amount;

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deletebtn = document.createElement('button');

    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('delete-btn')
    deletebtn.addEventListener('click',()=>{
        expenses.splice(expenses.indexOf(expense),1);

        total_amount -= expense.amount;
        totalAmountCell.textContent = total_amount;  
        expensesTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deletebtn);

});

for(const expense of expenses){
    total_amount += expense.amount;
    totalAmountCell.textContent = total_amount;

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('delete-btn')
    deletebtn.addEventListener('click',()=>{
        expenses.splice(expenses.indexOf(expense),1);

        total_amount -= expense.amount;
        totalAmountCell.textContent = total_amount;  
        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deletebtn);

}