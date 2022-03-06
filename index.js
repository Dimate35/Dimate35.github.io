function add() {
    let li = document.createElement('LI');
    let input_value = document.form_main.tarefa.value;
    let input_text = document.createTextNode(input_value);
  
    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_main.tarefa.value = "";
  }