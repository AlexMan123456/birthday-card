import getRandomNumber from "./get-random-number"

function shuffleArray(array){
    const arrayCopy = [...array]
    const randomisedArray = []
    let randomIndex = Infinity

    while(arrayCopy.length !== 0){
        randomIndex = getRandomNumber(0, arrayCopy.length-1)
        randomisedArray.push(arrayCopy[randomIndex])
        arrayCopy.splice(randomIndex,1)
    }

    return randomisedArray
}

export default shuffleArray