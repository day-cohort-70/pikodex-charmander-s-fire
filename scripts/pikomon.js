/*
    This component will display the Pikomans
*/

import { getPikoman } from "./database.js"



export const pikoCard = () => {

    const pikomon = getPikoman()
   /* let pikoString = '<div class="pikoContainer">'

    for (const piko of pikomon) {
        
        pikoString += `
        <section id = "container">
            <div><img class="piko-img" src = "./${piko.imageUrl}"/> </div>
 
            <div class="piko-card">${piko.name}
            
            <div class = "piko-abilities">${piko.name} has the ability of ${piko.abilities}</div>     
            <div class = "piko-category">${piko.name} has the category of ${piko.category}</div>
            <div class = "piko-weakness">${piko.name} has the weakness of ${piko.weakness}</div>
            </div>
        
        `
    }
    
    
    const pikoHeader = `<h1 class = "title">Pikodex</h1>`
    return pikoHeader + pikoString;
    return pikoString + '</section>'*/


let htmlString = '<article class="pikoList">'

// Create HTML representations of each fish here
for (const piko of pikomon) {

    // Why is there a backtick used for this string?
    htmlString += `<section class="piko_card">
        <div><img class="piko-img" src = "./${piko.imageUrl}" style="width: 200px; height: 150px;" /></div>
        <div class="piko__name">${piko.name}</div>
        <div class="piko__abilities">${piko.abilities}</div>
        <div class="piko__category">${piko.category}</div>
        <div class="piko_weakness">${piko.weakness}</div>
        
    </section>
`
}

const pikoHeader = `<h1 class = "title">Pikodex</h1>`
    return pikoHeader + htmlString;
    return pikoString + '</section>'

htmlString += `</article>`

return htmlString
}