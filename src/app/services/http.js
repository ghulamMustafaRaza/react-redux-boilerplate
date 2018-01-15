import { Observable } from "rxjs";
const { ajax } = Observable

const baseUri = 'https://jsonplaceholder.typicode.com'

export const $get = endpoint => ajax.get(baseUri + endpoint)
export const $post = endpoint => ajax.post(baseUri + endpoint)