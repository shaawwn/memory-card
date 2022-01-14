
function getImages() {
    // Get a list of all the images in the images folder and return
    let imageList = []
    for(let i = 0; i < 151; i++) {
        try {
            imageList.push(`./${i}.png`)
        } catch {
            console.log("No such image")
        }
    }

    return imageList
}

export default getImages;