var form = document.querySelector('.formWithValidation');
var validateBtn = form.querySelector('.validateBtn');
var Task = form.querySelector('.Task');
var TaskDeskription = form.querySelector('.TaskDeskription');
var priority = form.querySelector('.priority');
var fields = form.querySelectorAll('.field');
var c = 'white';

    var task = document.getElementById('task');
    var taskPlaceholder = document.getElementById('taskPlaceholder');
    var taskPlaceholderPriority = document.getElementById('taskPlaceholderPriority');
    var taskPlaceholderPriorityClr = document.getElementById('taskPlaceholderPriorityClr');
    var placeholderTask = document.getElementById('placeholder-task');
    var highPriority = document.getElementById('High').value;
    var mediumPriority = document.getElementById('Medium');
    var lowPriority = document.getElementById('Low');
     

    var c = 'black';
 

form.addEventListener('button', function(event){
    event.preventDefault();
   
    
})


function Selected(a) {

    var label = a.value;

    if (label==1) {
        c = 'red';
         
    } else if (label==2) {
        c='yellow';

    } else if (label==3) 

        c='green';
}



function test3(){
    
    
    
    
    var placeholderTask2= document.createElement('div');
    placeholderTask2.className = "placeholder-task";
    var placeholderTaskText = document.createElement('h1');
    
    var taskPlaceholder2 = document.createElement('div');
    taskPlaceholder2.className = "placeholder";
    
    var taskPlaceholderPriority2 = document.createElement('div');
    taskPlaceholderPriority2.className = "placeholder-priority"
    
    
    var taskPlaceholderPriorityClr2 = document.createElement('div');
    taskPlaceholderPriorityClr2.className = " placeholder-priority-clr";
    taskPlaceholderPriorityClr2.style.backgroundColor = c;
    
     
    var PlaceholderDescription = document.createElement('div');
    PlaceholderDescription.className = 'placeholder-description';
    
    
    
    
    
    
    
    placeholderTaskText.innerHTML = Task.value;
    task.appendChild(taskPlaceholder2);
    taskPlaceholderPriority2.appendChild(taskPlaceholderPriorityClr2);
    taskPlaceholder2.appendChild(taskPlaceholderPriority2);    
    taskPlaceholder2.appendChild(placeholderTask2);
    placeholderTask2.appendChild(placeholderTaskText);
    taskPlaceholder2.appendChild(PlaceholderDescription);
    
    
    
    
    
   
    
    
}
 


document.getElementById("btn").onclick = test3;


  function check() {
  var pole1 = document.querySelector('.Task');
  document.getElementById('btn').disabled = pole1.value ? false : "disabled";}



   





