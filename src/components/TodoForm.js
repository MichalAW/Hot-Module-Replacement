import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    };

    change(e) {
        this.setState({ value: e.target.value });
    };

    submit(e) {
        e.preventDefault();
        this.state.value == '' ? alert('task name!') : this.props.add(this.state.value);
    };

    render() {
        return (
            <form onSubmit={this.submit.bind(this)}>
                <input type='text' onChange={this.change.bind(this)} />
                <button type='submit'>Add</button>
            </form>
        );
    };
};

export default TodoForm;