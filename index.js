var columns=document.querySelectorAll(".col");
for(var i=0;i<columns.length;i++){
    columns[i].addEventListener('click',function(){
        var audioNote;
        console.log(this.innerHTML.trim());
        switch(this.innerHTML.trim()){
            case 'A':audioNote=1;
            break;
            case 'S':audioNote=2;
            break;
            case 'D':audioNote=3;
            break;
            case 'F':audioNote=4;
            break;
            case 'L':audioNote=5;
            break;
            case 'K':audioNote=6;
            break;
            case 'J':audioNote=7;
            break;
            
        }
        var audio=new Audio("sounds/note"+audioNote+".wav");
        audio.play();
    });

document.addEventListener('keypress',function(event){
        playNote(event.key.toUpperCase());
});
}
    function playNote(key){
        var audioNote;
        console.log(key);
        switch(key){
            case 'A':audioNote=1;
            break;
            case 'S':audioNote=2;
            break;
            case 'D':audioNote=3;
            break;
            case 'F':audioNote=4;
            break;
            case 'L':audioNote=5;
            break;
            case 'K':audioNote=6;
            break;
            case 'J':audioNote=7;
            break;
        }
        var audio=new Audio("sounds/note"+audioNote+".wav");
        audio.play();
    }



