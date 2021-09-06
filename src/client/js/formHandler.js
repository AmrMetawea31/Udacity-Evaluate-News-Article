 import {checkURL} from './checkURL'
 import "babel-polyfill";

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('url').value
    if(checkURL(formText)){
    
    console.log("::: Form Submitted :::")

    postArticle('http://localhost:8082/api', {url: formText})

    .then(function(res) {
        
        document.getElementById("score_tag").innerHTML = `Polarity: ` + scoreTag(res.score_tag)
         document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    })
    } else {
        alert('OOOPS, INVALID URL!!!');
    }
}    

      const postArticle = async (url = "", data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        try {
            const datas = await response.json();
            return datas;
        } catch (error) {
            console.log('error', error);
        }
    };

const scoreTag = (score) => {
    let display;
    switch (score){
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
    }
    return display.toUpperCase();
}
export { handleSubmit }
export { scoreTag }