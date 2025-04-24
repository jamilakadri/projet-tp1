import q-tf from ('./components/q-tf');
import list-category from ('./components/list-category');
let b1=document.querySelector("#b1")
async function evenbutt() {
    let s=document.querySelector("#lq");
    let url=`https://opentdb.com/api_category=${s.value}`;
    let r=await fetch(url);
    let data=await r.json();
    for (let q of data.results){
        let code =`<q-tf question="${q.question}" correct_answer="${q.correct_answer}"  incorrect_answer="incorrect_answers"></q-tf>`;
        document.innerHTML+=code;
    }
}
b1.addEventListener("click", evenbutt);

