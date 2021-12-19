function shout(string) {
    return string.toUpperCase();
}
shout("Hello!")

function whisper(string) {
    return string.toLowerCase();
}
whisper("Hello!")

function logShout(string) {
    console.log(string.toUpperCase());
    return newFunction();

    function newFunction() {
        return string.toUpperCase();
    }
}
logShout("Hello!")

function logWhisper(string) {
    console.log(string.toLowerCase());
    return anotherNewFunction;

    function anotherNewFunction() {
        return string.toLowerCase();
    }
}
logWhisper("Hello!")

const string = "Hello!"
let greeting

function sayHiToHeadphonedRoommate(string){
    if (string==="hello") {
        greeting = "I can\'t hear you!"
    } else if (string==="HELLO") {
        greeting = "YES INDEED!"
    } else if (string==="Let\'s have dinner together!") {
        greeting = "I would love to!"
    }
    return greeting
}


