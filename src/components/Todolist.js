import React from "react";

class Todolist extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     console.log(props);
    //     this.state = {
    //         name:this.props.title
    //     }
    //   }
    render() {
        return (
            <div>
                <li
                    className={this.props.todo.isDone ? "striked" : ""}
                    onClick={todo => this.props.handleClick(this.props.todo)}
                >
                    {this.props.title}
                </li>
                <button onClick={todo => this.props.Deleted(this.props.todo)}>DELETE</button>
            </div>
        );
    }
}

export default Todolist;