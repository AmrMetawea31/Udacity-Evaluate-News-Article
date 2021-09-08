 import {checkURL} from './checkURL'
 import "babel-polyfill";

 async function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value
    if(checkURL(formText)){
    let response = await fetch("/api_data", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({url:formText})
    });
    const data =  await response.json()
    if(data.status.msg == 'OK'){
        
        outputResult(data, scoreTag(data.score_tag))
    }else{
        alert("Something went wrong, Please try again")
    }
    } else {
        alert('OOOPS, INVALID URL!!!');
    }
}    
    
const outputResult = (data, scoreTag)=>{
    document.getElementById("score_tag").innerHTML = `Polarity: ${scoreTag}`
     document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}` 
     document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
     document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
     document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
}
const scoreTag = (score) => {
    let display;
    switch (score){
        case 'P+':
            return(
            display = 'STRONG POSITIVE'
            )
          
        case 'P':
            return(
            display = 'POSITIVE'
            )
           
        case 'NEW':
            return(
            display = 'NEUTRAL'
            )
           
        case 'N':
            return(
            display = 'NEGATIVE'
            )
          
        case 'N+':
            return(
            display = 'STRONG NEGATIVE'
            )
         
        case 'NONE':
            return(
            display = 'NO SENTIMENT'
            )
    }
    
}
export { handleSubmit }
export { scoreTag }