let myLeads = []
const inputEl = document.getElementById("input-el");
const saveButton = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  renderLeads() 
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  renderLeads() 
})

saveButton.addEventListener("click", function() {
    myLeads.push(inputEl.value) 
    inputEl.value = "";
    // convert array to string and store page data 
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads(); 
})



//render user input to DOM

function renderLeads(){
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
      </a>
    </li>
  `;
  }
  ulEl.innerHTML = listItems
}