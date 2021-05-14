let applicationState = {
    requests: [],
    clowns: [],
    completions: []
}


const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")



// Fetch request
export const fetchRequest = () => {
    return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(serviceRequests => {
        applicationState.requests = serviceRequests
    })
}


// Post request with Fetch
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    // Re-rendering html with new updated post
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


// Deleting posts with fetch request
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


//-----------------------------------

// Getter functions
export const getRequests = () => {
    return [...applicationState.requests]
}