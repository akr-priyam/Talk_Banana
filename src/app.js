var btnClick=document.querySelector("#btn-click");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
var serverUrl="https://api.funtranslations.com/translate/mandalorian.json";

/*Function to return the url with additional parameters to fetch() function*/
function callBackFunction(inputText){
return serverUrl + "?" +"text=" +inputText;
}


/*can be made a callback function also*/
btnClick.addEventListener('click',()=>{

    /*getting the input from textarea*/
    var inputText= txtInput.value;
    /*calling the url fetch, getting only translations part*/
    fetch(callBackFunction(inputText)).then(response=>response.json()).then(json=>
    {
        /*getting the text from api and showing to the output*/
        let translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
    })
    .catch(error=>console.log(error));

});