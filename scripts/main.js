// Import the function that returns a copy of the pikomans array
import { getPikoman } from "./database.js"


const pikodex = getPikoman()

for (let piko of pikodex) {
    console.log(piko)
}

const container = document.querySelector('#container')


