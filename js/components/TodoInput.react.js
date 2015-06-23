var React = require('react'),
    ReactPropTypes = React.PropTypes,
    ENTER_KEY_CODE = 13,
    TodoInput = React.createClass({

        propTypes: {
            className: ReactPropTypes.string,
            id: ReactPropTypes.string,
            placeholder: ReactPropTypes.string,
            onSave: ReactPropTypes.func.isRequired,
            value: ReactPropTypes.string
        },

        getInitialState: function() {
            return {
                value: this.props.value || ''
            }
        },

        /**
         * @return {object}
         */
        render: function() /*object*/ {
            return (
                <div
                    className={this.props.className}>
                    <input
                        id={this.props.id}
                        className="column"
                        placeholder={this.props.placeholder}
                        onBlur={this._save}
                        onChange={this._onChange}
                        onKeyDown={this._onKeyDown}
                        value={this.state.value}
                        autoFocus={true}
                    />
                </div>
            )
        },

        /**
         * Invokes the callback passed in as onSave, allowing this component to be
         * used in different ways.
         */
        _save: function() {
            this.props.onSave(this.state.value)
            this.setState({
                value: ''
            })
        },

        /**
         * @param {object} event
         */
        _onChange: function(/*object*/ event) {
            this.setState({
                value: event.target.value
            })
        },

        /**
         * @param  {object} event
         */
        _onKeyDown: function(event) {
            if (event.keyCode === ENTER_KEY_CODE)
                this._save()
        }

    })

module.exports = TodoInput
