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
    searchText: '',
    hideCompleted: false
};

const renderTodos = function(notes,filters) {
    const filterdTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toUpperCase().includes(filters.searchText.toUpperCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
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



//Listen for todo text
document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    //console.log(e.target.value);
})

//search for todos
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos,filters);
});

//add todo to DOM
document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault();
    todos.push({
        text : e.target.elements.newTodo.value,
        completed : false
    });
    renderTodos(todos,filters);
    //e.target.elements["new"].value = ''
    e.target.elements.newTodo.value = ''
    
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    console.log(e.target.checked)
    filters.hideCompleted = e.target.checked;

    renderTodos(todos,filters);
})


