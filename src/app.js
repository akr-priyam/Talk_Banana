var btnClick=document.querySelector("#btn-click");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

/*Function to return the url with additional parameters to fetch() function*/
function callBackFunction(inputText){
return serverUrl + "?" +"text=" +inputText;
}


/*can be made a callback function also*/
btnClick.addEventListener('click',()=>{

    /*getting the input from textarea*/
    var inputText= txtInput.value;
    /*calling the url fetch, getting only translations part*/
    fetch(callBackFunction(inputText)).then(response=>response.json()).then(json=>console.log(json.contents.translation));

});