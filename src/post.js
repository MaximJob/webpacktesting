export default class Post {
    constructor(title, img) {
        this.title = title
        this.img = img
        this.date = new Date()
    }

    /*
    WOWWOWOWOWOWOOWO
     */

    toString() {
        return JSON.stringify({
            title: this.title,
            img: this.img,
            date: this.date
        })
    }
}