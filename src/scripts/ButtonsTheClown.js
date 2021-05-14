import { RequestForm } from "./ButtonsRequestForm.js"
import { Requests } from "./ServiceRequests.js"

export const ButtonsTheClown = () => {
    return `
    <section class="requestForm">
        ${RequestForm()} 
    </section>
    
    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>

    `
}