var React = require('react'),
    TodoActions = require('../actions/TodoActions'),
    TodoInput = require('./TodoInput.react'),
    Header = React.createClass({

        /**
         * @return {object}
         */
        render: function() {
            return (
                <header id="header" className="fifteen wide column centered">
                    <h1 className="ui huge header column row center aligned">next</h1>
                    <div class="column row center aligned">
                        <TodoInput
                            id="new-todo"
                            className="ui input massive fluid"
                            placeholder="What needs to be done?"
                            onSave={this._onSave}
                        />
                    </div>
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
