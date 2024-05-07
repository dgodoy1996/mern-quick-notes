import sendRequest from "./send-request";
const BASE_URL = '/api/notes'

export async function getAll() {
    return sendRequest(BASE_URL)
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export async function getNotes(id) {
    return sendRequest(`${BASE_URL}/new/${id}`)
}

export async function createNotes(id, note) {
    return sendRequest(`${BASE_URL}/new/${id}`, "POST", note)
}