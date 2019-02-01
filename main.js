function addTodo(btn) {
  $.ajax({
    type: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: $(btn.form).serialize(),
    dataType: 'json'
  });
}
