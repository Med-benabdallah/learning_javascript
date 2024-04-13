function letterFinder(word, match){

    for(i=0; i<word.length; i++){
        if(word[i] == match){
            console.log("found the letter " + match + " at " , i+1)
        }
        else{
            console.log("--No match found at" , i+1)
        }
    }
}
letterFinder("test","t");