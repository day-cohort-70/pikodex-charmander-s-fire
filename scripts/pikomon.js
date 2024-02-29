/*
    This component will display the Pikomans
*/

import { getPikoman } from "./database.js"



export const pikoCard = () => {

    const pikomon = getPikoman()
    let pikoString = ""

    for (const piko of pikomon) {
        
        pikoString += `
        <img class="piko-img" src = "./${piko.imageUrl}"/> 
            <div class="piko-card">${piko.name} 
                <div class = "piko-abilities">${piko.name} has the ability of ${piko.abilities}</div>     
                <div class = "piko-category">${piko.name} has the category of ${piko.category}</div>
                <div class = "piko-weakness">${piko.name} has the weakness of ${piko.weakness}</div>
            </div>
        `
    }
    
    
    const pikoHeader = `<h1 class = "title">Pikodex</h1>`
    return pikoHeader + pikoString;
}