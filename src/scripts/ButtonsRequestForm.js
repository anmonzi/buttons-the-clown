import { sendRequest } from "./databaseAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // grab user data from fields
        const parentFullName = document.querySelector("input[name='parentFullName']").value // what's up with the syntax for the querySelector input...
        const childFullName = document.querySelector("input[name='childFullName']").value
        const numberOfGuests = document.querySelector("input[name='numberOfGuests']").value
        const partyAddress = document.querySelector("input[name='partyAddress']").value
        const partyDate = document.querySelector("input[name='partyDate']").value
        const hoursNeeded = document.querySelector("input[name='hoursNeeded']").value

        // make an object out of the user input
        const dataToSendToApi = {
            parentName: parentFullName,
            childName: childFullName,
            guests: numberOfGuests,
            address: partyAddress,
            date: partyDate,
            hours: hoursNeeded
        }

        // send the data off to the api for permanent storage
        sendRequest(dataToSendToApi)
    }
})



// Service Form html to render to DOM
export const RequestForm = () => {
    let html = `
    <article class="request__title">
        <h3>Please Enter Your Request</h3>
    </article>

    <section class="requestForm">
        <div class="field">
        <label class="label" for="parentFullName">Parent Full Name</label>
        <input type="text" name="parentFullName" class="input" />
        </div>
        <div class="field">
        <label class="label" for="childFullName">Child Full Name</label>
        <input type="text" name="childFullName" class="input" />
        </div>
        <div class="field">
        <label class="label" for="numberOfGuests">Number Of Guests</label>
        <input type="number" name="numberOfGuests" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyAddress">Address of Party</label>
        <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyDate">Date of Party</label>
        <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
        <label class="label" for="hoursNeeded">Number of Hours Needed</label>
        <input type="number" name="hoursNeeded" class="input" />
        </div>
    </section>

    <button class="button" id="submitRequest">Submit Request</button>
    `
    
    return html
}


