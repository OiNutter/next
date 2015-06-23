var React = require('react'),
    ReactPropTypes = React.PropTypes,
    TodoActions = require('../actions/TodoActions'),
    TodoItem = require('./TodoItem.react'),
    TodoList = React.createClass({

        propTypes: {
            allTodos: ReactPropTypes.object.isRequired,
            areAllComplete: ReactPropTypes.bool.isRequired
        },

        /**
         * @return {object}
         */
        render: function() {
            // This section should be hidden by default
            // and shown when there are todos.
            if (Object.keys(this.props.allTodos).length < 1)
                return null;

            var allTodos = this.props.allTodos,
                todos = [],
                key

            for (key in allTodos)
                todos.push(<TodoItem key={key} todo={allTodos[key]} />)

            return (
                <section id="main" className="ui card two column centered">
                    <div className="ui checkbox">
                        <input
                            id="toggle-all"
                            type="checkbox"
                            onChange={this._onToggleCompleteAll}
                            checked={this.props.areAllComplete ? 'checked' : ''}
                        />
                        <label htmlFor="toggle-all">Mark all as complete</label>
                    </div>
                    <div id="todo-list" className="ui celled list">{todos}</div>
                </section>
            )
        },

        /**
         * Event handler to mark all TODOs as complete
         */
        _onToggleCompleteAll: function() {
            TodoActions.toggleCompleteAll()
        }

    })

module.exports = TodoList
