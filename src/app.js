var btnClick=document.querySelector("#btn-click");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");



/*can be made a callback function also*/
btnClick.addEventListener('click',()=>{

// console.log('clicked!');
// console.log("input",txtInput.value);

/*writing the value into output from textarea*/
outputDiv.innerText="translate to banana "+txtInput.value;

});