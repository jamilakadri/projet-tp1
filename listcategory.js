export class Listcategory extends HTMLElement{
    constructor(){
        super()


    }
    async connectedCallback(){
        
        //this.innerHTML=`<button> bonjour</button>`
        this.innerHTML=`<select class="form-select"></select>`
        console.log("bonjour")
        let url="https://opentdb.com/api_category.php"
        let res=await fetch(url)
        let data=await res.json()
        for(let cat of data.trivia_categories){
            this.querySelector("select").innerHTML+=`<option value="${cat.id}">${cat.name}</option>`
            console.log(cat)
        }

        
    }

}
customElements.define('list-category',Listcategory);