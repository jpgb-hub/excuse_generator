
window.onload =() =>{
    let randomNumber = Math.random() *10;
    document.querySelector('#excuse').innerHTML = generateExcuse();
}

let generateExcuse =() =>{

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let whIndex= Math.floor(Math.random() *who.length);
    let actIndex= Math.floor(Math.random() *action.length);
    let whtIndex= Math.floor(Math.random()*what.length);
    let whnIndex= Math.floor(Math.random() *when.length);


    return who[whIndex] + " " + action[actIndex] + " "+ what[whtIndex]+" "+ when[whIndex];
}