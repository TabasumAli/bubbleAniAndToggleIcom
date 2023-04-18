const toggle= document.querySelector('.toggle');
const text= document.querySelector('.text');

// creating a function apply to button

function amimatedFunc(){
    toggle.classList.toggle('active');

    if(toggle.classList.contains('active')){
        // toggle.style.background = "#f3f3f3 url('img_tree.png') no-repeat right top";
        text.innerHTML = "ON";

    }else{
        text.innerHTML = "OFF";
    }


}


