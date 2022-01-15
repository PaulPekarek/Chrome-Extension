let myLeads = []
const inputEl = document.getElementById("input-el");
const saveButton = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads) 
}

tabBtn.addEventListener("click", function() {
  
})

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
      </a>
    </li>
  `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads) 
})

saveButton.addEventListener("click", function() {
    myLeads.push(inputEl.value) 
    inputEl.value = "";
    // convert array to string and store page data 
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads); 
})




