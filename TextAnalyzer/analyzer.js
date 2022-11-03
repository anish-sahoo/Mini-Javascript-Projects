function submitFunction(){
    var text = document.getElementById("t1").value;

    if(text.length==0){
        alert("Empty input!");
        return;
    }

    var numberOfSentences = numOfSentences(text);
    text = text.replace(/[^a-zA-Z0-9 ]/g, '');

    var wordArray = text.split(' ');
    var wordsCount = wordArray.length;
    
    var letterCount = 0;
    
    wordArray.forEach(word => {
        letterCount+=word.length;
    });

    var averageWordSize = letterCount/wordsCount;
    
    alert("Word Count = " + wordsCount + "\n"
        + "Sentences Count = " + numberOfSentences + "\n"
        + "Average Word Size = " + averageWordSize);
}

function numOfSentences(sentences) {
    sentences = sentences.replace(/[^a-zA-Z0-9.;!? ]/g, '');
    sentences = sentences.replace(/[^a-zA-Z0-9 ]/g, '.');

    var a = sentences.charAt(sentences.length-1);
    
    if(a!='.'){
        sentences+='.';
    }

    var b = sentences.split('.');
    return b.length-1;
}