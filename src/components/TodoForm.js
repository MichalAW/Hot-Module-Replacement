import React from 'react';
class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value : ''}
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value : event.target.value});
    };

    handleSubmit(event) {
        this.props.addTodo(this.state.value);
        event.preventDefault();
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button type="submit">Click me</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;