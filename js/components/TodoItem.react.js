var React = require('react'),
    ReactPropTypes = React.PropTypes,
    TodoActions = require('../actions/TodoActions'),
    TodoInput = require('./TodoInput.react'),
    cx = require('react/lib/cx'),
    TodoItem = React.createClass({

        propTypes: {
            todo: ReactPropTypes.object.isRequired
        },

        getInitialState: function() {
            return {
                isEditing: false
            }
        },

        /**
         * @return {object}
         */
        render: function() {
            var todo = this.props.todo,
                input

            if (this.state.isEditing) {
                input =
                <TodoInput
                    className="edit ui input fluid"
                    onSave={this._onSave}
                    value={todo.text}
                />
            }

            // List items should get the class 'editing' when editing
            // and 'completed' when marked as completed.
            // Note that 'completed' is a classification while 'complete' is a state.
            // This differentiation between classification and state becomes important
            // in the naming of view actions toggleComplete() vs. destroyCompleted().
            return (
                <div
                    className={cx({
                        'completed': todo.complete,
                        'editing': this.state.isEditing,
                        'item': true,
                    })}
                    key={todo.id}>
                        <div className="right floated ui icon button negative">
                            <i className="icon remove" onClick={this._onDestroyClick}></i>
                        </div>
                        <div className="content">
                            <div className="ui checkbox middle aligned view">
                                <input
                                    className="toggle middle aligned"
                                    type="checkbox"
                                    checked={todo.complete}
                                    onChange={this._onToggleComplete}
                                />
                                <label onDoubleClick={this._onDoubleClick}>
                                    {todo.text}
                                </label>
                            </div>
                            {input}
                        </div>

                </div>
            )
        },

        _onToggleComplete: function() {
            TodoActions.toggleComplete(this.props.todo)
        },

        _onDoubleClick: function() {
            this.setState({isEditing: true})
        },

        /**
         * Event handler called within TodoTextInput.
         * Defining this here allows TodoTextInput to be used in multiple places
         * in different ways.
         * @param  {string} text
         */
        _onSave: function(text) {
            TodoActions.updateText(this.props.todo.id, text)
            this.setState({isEditing: false})
        },

        _onDestroyClick: function() {
            TodoActions.destroy(this.props.todo.id)
        }

    })

module.exports = TodoItem
