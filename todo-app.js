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
//Return incoplete tasks
const incomplete = todos.filter(function(todo) {
    return todo.completed === false;
})
console.log(incomplete);

const summary = document.createElement('h2');
summary.textContent = `You have ${incomplete.length} todos left`;
document.querySelector('body').appendChild(summary);


