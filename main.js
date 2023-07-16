const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listcontainer");
function addTask(){
    if(inputBox.value === ''){
        alert('Bạn chưa thêm nhiệm vụ vào!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7 ";
        li.appendChild(span);
    }
    inputBox.value= '';
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
   }
    else if ( e.target.tagName === "SPAN"){     
          e.target.parentElement.remove();
       }      
     } ,false );
