
function getImages(numCards) {
    // Get a list of all the images in the images folder and return
    let imageList = []
    for(let i = 0; i < numCards; i++) { // Max is 151 
        try {
            imageList.push(`./${i}.png`)
        } catch {
            console.log("No such image")
        }
    }

    return imageList
}

export default getImages;