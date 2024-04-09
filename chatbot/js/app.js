function talk(){
    var know = {
        "Hello ?" : "Hi there &#128540" ,
        "Who are you?" : "My name , is Alice",
        "How are you ?":"I am good :-)",
        "What can i do for you?": "Give us a follow or a like",
        "Your follows?":"I have 1000 likes, no followes yet!",
        "Okay":"Thanks for the convo",
        "Bye":"Okay! we will meet soon,was nice chattin with you",

    }
    var user= document.getElementById('userBox').value;
    document.getElementById('chatlog').innerHTML =user + "<br>";

    if(user in know){
        document.getElementById('chatlog').innerHTML =know[user] + "<br>";
        
    }else{
        document.getElementById('chatlog').innerHTML = "Sorry I didn't underatsand" + "</br>";

    }
}