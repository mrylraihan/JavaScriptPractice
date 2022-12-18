document.addEventListener('DOMContentLoaded', function(event) {
    //insert your answer within this code block
      function addingToDos(){
      const text = document.getElementById("new-todo").value;
      const newItem = document.createElement('li');
      newItem.innerText = text;
      document.querySelector('.todos').appendChild(newItem);
      // As an added bonus, clear the input so users can keep adding items!
      document.getElementById("new-todo").value = null;
    }
    document.getElementById("generate-todo").addEventListener('click', addingToDos);
    
    
    
    // end code solution
})