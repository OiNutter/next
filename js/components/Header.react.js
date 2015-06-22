var React = require('react'),
    TodoActions = require('../actions/TodoActions'),
    TodoInput = require('./TodoInput.react'),
    Header = React.createClass({

        /**
         * @return {object}
         */
        render: function() {
            return (
                <header id="header">
                    <h1>todos</h1>
                    <TodoInput
                        id="new-todo"
                        placeholder="What needs to be done?"
                        onSave={this._onSave}
                    />
                </header>
            )
        },

        /**
         * Event handler called within TodoInput.
         * Defining this here allows TodoInput to be used in multiple places
         * in different ways.
         * @param {string} text
         */
        _onSave: function(text) {
            if (text.trim())
                TodoActions.create(text)
        }

    })

module.exports = Header
