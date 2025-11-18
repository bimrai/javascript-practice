// So the constructor function was the original class. Class simplifies what are known as constructor functions by a lot. With class, you have prototype, new and this. all working under the hood.
// The older version of JS had a more difficult and complexed way of doing "OOP", but it really was not OOP. This is a simple example I made to showcase how that old version is and 
// let us compare it with making a class. 


// ===========   old method   ==============:
function SocialMedia(name, company) {
    this.name = name;
    this.company = company;
}

const whatsApp = new SocialMedia("WhatsApp", "Meta")
console.log(whatsApp)
const facebook = new SocialMedia("Facebook", "Meta")
console.log(facebook)
const instagram = new SocialMedia("Instagram", "Meta")
console.log(instagram)
const youtube = new SocialMedia("YouTube", "Google")
console.log(youtube)
const tikTok = new SocialMedia("TikTok", "ByteDance")
console.log(tikTok)

// ===========   newer method   =============: 

class SocialMedia {
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }
    
    readSocialMedia() {
        return `Social Media: ${this.name}, Company: ${this.company}`
    }
}

const whatsApp = new SocialMedia("WhatsApp", "Meta")
console.log(whatsApp.readSocialMedia())
const youTube = new SocialMedia("YouTube", "Google")
console.log(youTube.readSocialMedia())
