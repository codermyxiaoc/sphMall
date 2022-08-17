import { v4 as uuidv4 } from 'uuid';
export function getuuid() {
    if(!localStorage.getItem('UUID')){
        let uuid = uuidv4()
        localStorage.setItem('UUID', uuid)
    }
    return localStorage.getItem('UUID')
}