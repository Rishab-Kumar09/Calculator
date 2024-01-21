// Time for logic now

let Buttons = document.querySelectorAll(".buttons");
let display = "";
let result;
let userClicked;

let input = document.querySelector("#input"); 
console.log(input.value);
for(let i=0;i<Buttons.length;i++){
    Buttons[i].addEventListener("click", function(){
        if (Buttons[i].id == "equal"){
        //eval() can be used to evaluate a string and give the result as output. in this case, it will perform the arithmatic operation and give the result.
            result = eval(display);
            input.value = result;
            display = "";  
        }
        else if (Buttons[i].id == "AC"){
            display = "";
            input.value = display;
        }
        else{
            userClicked = this.textContent;
            console.log(userClicked);
            display = display+userClicked;
            input.value = display;
        }
    });
}
