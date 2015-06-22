var React = require('react'),
    Footer = require('./Footer.react'),
    Header = require('./Header.react'),
    TodoList = require('./TodoList.react'),
    TodoStore = require('../stores/TodoStore'),
    TodoApp

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
    return {
        allTodos: TodoStore.getAll(),
        areAllComplete: TodoStore.areAllComplete()
    }
}

TodoApp = React.createClass({

    getInitialState: function() {
        return getTodoState()
    },

    componentDidMount: function() {
        TodoStore.addChangeListener(this._onChange)
    },

    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this._onChange)
    },

    /**
     * @return {object}
     */
    render: function() {
        return (
            <div>
                <Header />
                <TodoList
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                />
                <Footer allTodos={this.state.allTodos} />
            </div>
        )
    },

    /**
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function() {
        this.setState(getTodoState())
    }

})

module.exports = TodoApp
