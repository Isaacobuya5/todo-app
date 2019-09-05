/*var paragraphEl = document.querySelectorAll('p');
console.log(paragraphEl);
paragraphEl.forEach(function(paragraph) {
 if (paragraph.textContent.includes('the')) {
     paragraph.remove();
 }
});
*/

const todos = [{
    text : 'Order cat food',
    completed : false
},{
    text : 'Clean kitchen',
    completed : true
},{
    text : 'Buy food',
    completed : true
},{
    text : 'Do work',
    completed : false
},{
    text : 'Excercise',
    completed : true
}];

const filters = {
    searchText: ''
};

const renderTodos = function(notes,filters) {
    const filterdTodos = todos.filter(function(todo) {
        return todo.text.toUpperCase().includes(filters.searchText.toUpperCase());
    });
        //Return incoplete tasks
        const incomplete = filterdTodos.filter(function(todo) {
            return todo.completed === false;
        })
         document.querySelector('#todos').innerHTML = '';

        const summary = document.createElement('h2');
        summary.textContent = `You have ${incomplete.length} todos left`;
        document.querySelector('#todos').appendChild(summary);

        filterdTodos.forEach(function(todo) {
            const p = document.createElement('p');
            p.textContent = todo.text;
            document.querySelector('#todos').appendChild(p);
        });    

}

renderTodos(todos,filters);


//Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log("Add a new todo");
})

//Listen for todo text
document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value);
})

//search for todos
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos,filters);
})


