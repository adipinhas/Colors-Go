import chroma from 'chroma-js'
import uuid from 'uuid'

// var old = {
//     paletteName: "Material UI Colors",
//     id: "material-ui-colors",
//     emoji: "🎨",
//     colors: [
//       { name: "red", color: "#F44336" },
//       { name: "pink", color: "#E91E63" },
//       { name: "purple", color: "#9C27B0" },
//       { name: "deeppurple", color: "#673AB7" },
//       { name: "indigo", color: "#3F51B5" },
//       { name: "blue", color: "#2196F3" },
//       { name: "lightblue", color: "#03A9F4" },
//       { name: "cyan", color: "#00BCD4" },
//       { name: "teal", color: "#009688" },
//       { name: "green", color: "#4CAF50" },
//       { name: "lightgreen", color: "#8BC34A" },
//       { name: "lime", color: "#CDDC39" },
//       { name: "yellow", color: "#FFEB3B" },
//       { name: "amber", color: "#FFC107" },
//       { name: "orange", color: "#FF9800" },
//       { name: "deeporange", color: "#FF5722" },
//       { name: "brown", color: "#795548" },
//       { name: "grey", color: "#9E9E9E" },
//       { name: "bluegrey", color: "#607D8B" }
//     ]
//   }

const levels =[50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975]

function generatePalette(starterPalette){
  
    let newPalette={
        paletteName : starterPalette.paletteName,
        id : starterPalette.id,
        emoji : starterPalette.emoji,
        colors:{}
    }
   
    for(let level of levels){
        newPalette.colors[level]=[]
    }
    for (let color of starterPalette.colors){
        let scale = getScale(color.color,38).reverse()
        for(let i in scale){
            newPalette.colors[levels[i]].push({
                name:`${color.name}`,
                id:color.id,
                hex:scale[i],
                rgb:chroma(scale[i]).css(),
                rgba:chroma(scale[i]).css().replace("rgb","rgba").replace(")",(",1.0)"))
            })
            
        }

    }
    return newPalette
}
function getRange(hexColor){
    let end ="#fff"
    return[
        chroma(hexColor).darken(4).hex(),
        hexColor,
        end
    ]

}
function getScale(hexColor,numberOfColor){
   return chroma
   .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColor)
    
}


export {generatePalette}