import { getRequests } from "./databaseAccess.js"


// need to pull in request data and render it
const convertRequestsToHTML = (requestObject) => {
    return `
    <ul>
    <li><b>Customers Name:</b> ${requestObject.parentName}</li>
    <li><b>Childs Name:</b> ${requestObject.childName}</li>
    <li><b>Number of Guests Attending:</b> ${requestObject.guests}</li>
    <li><b>Party Address:</b> ${requestObject.address}</li>
    <li><b>Date of Party:</b> ${requestObject.date}</li>
    <li><b>Party Hours Needed:</b> ${requestObject.hours}</li>
    </ul>
    <button class="deny__request" id="deny--${requestObject.id}">Deny</button>
    `
}

export const Requests = () => {
    const requests = getRequests()
    let html = `
        <div>
        ${
            requests.map(convertRequestsToHTML).join("")
        }
        </div>
    `
    return html
}