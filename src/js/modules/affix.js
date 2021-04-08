export default class Affix{
    constructor(selector) {
        try {
            this.element = document.querySelector(selector);
        }catch (e){}
    }
    toggleAffix(){
        window.addEventListener('scroll',  () => {
            this.element.classList.toggle('affix', window.scrollY > 0)
        })
    }
}