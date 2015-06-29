var React = require('react'),
    ReactPropTypes = React.PropTypes,
    TodoActions = require('../actions/TodoActions'),
    Footer = React.createClass({

        propTypes: {
           allTodos: ReactPropTypes.object.isRequired
        },

        /**
         * @return {object}
         */
        render: function() {
            var allTodos = this.props.allTodos,
                total = Object.keys(allTodos).length,
                completed = 0,
                key,
                itemsLeft,
                itemsLeftPhrase,
                divider,
                clearCompletedButton

            if (total === 0)
                return null

            for (key in allTodos) {
                if (allTodos[key].complete)
                    completed++
            }

            itemsLeft = total - completed
            itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items '
            itemsLeftPhrase += 'left'

            // Undefined and thus not rendered if no completed items are left.
            if (completed) {
                divider = <div className="ui divider vertical"></div>
                clearCompletedButton =
                    <div className="column middle aligned">
                        <button
                            id="clear-completed"
                            className="ui button blue"
                            onClick={this._onClearCompletedClick}>
                            Clear completed ({completed})
                        </button>
                    </div>
            }

            return (
                <footer id="footer" className="ui fifteen wide column center aligned stackable grid">
                    <div className="column middle aligned">
                        <label id="todo-count">
                            <strong>
                                {itemsLeft}
                            </strong>
                            {itemsLeftPhrase}
                        </label>
                    </div>
                    {divider}
                    {clearCompletedButton}
                </footer>
            )
        },

        /**
         * Event handler to delete all completed TODOs
         */
        _onClearCompletedClick: function() {
            TodoActions.destroyCompleted()
        }

    })

module.exports = Footer
