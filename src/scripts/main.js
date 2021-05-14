import { ButtonsTheClown } from "./ButtonsTheClown.js"
import { fetchRequest, deleteRequest } from "./databaseAccess.js"


const mainContainer = document.querySelector("#container")





// Initial render of HTML *after fetch request pulls API data
const renderHTML = () => {
    fetchRequest().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
}


renderHTML()





// Re-rendering of HTML after customEvent of Posting data to API occurs 
mainContainer.addEventListener("stateChanged", customEvent => {
    renderHTML()
})




// Event listener for delete button which invokes the delete fetch request
mainContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deny--")) {
        const [,requestId] = clickEvent.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


