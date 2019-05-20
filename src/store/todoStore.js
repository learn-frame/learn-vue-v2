const state = {
  todos: [
    {
      id: 1,
      text: '第一件事',
      done: true
    },
    {
      id: 2,
      text: '第二件事',
      done: false
    },
    {
      id: 3,
      text: '第三件事',
      done: true
    }
  ]
};

const getters = {
  doneTodos: state => state.todos.filter(todo => todo.done),
  doneTodosLength: (state, getters) => getters.doneTodos.length,
  getTodoById: state => id => state.todos.find(todo => todo.id === id)
};

export default {
  state,
  getters
};
