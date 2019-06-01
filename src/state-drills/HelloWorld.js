import React from 'react'

class HelloWorld extends React.Component {

    constructor(props) {
        super(props)
        this.state = {message: "Here is the Hello World Component; click a button below"};
    }
    

    handleWorldClicked = () => {
        const worldMessage = "Hello from the WORLD Button";
        this.setState({
            message: worldMessage
        })
    }

    handleFriendClicked = () => {
        const friendMessage = "Hello from the FRIEND Button";
        this.setState({
            message: friendMessage
        })  
    }
        
    handleReactClicked = () => {
        const reactMessage = "Hello from the REACT Button";
        this.setState({
            message: reactMessage
        })
    }

    render () {
        return (
        <div>
            
            {this.state.message}

            <br />

            <button onClick = {this.handleWorldClicked}>
            World
            </button>

            <br />

            <button onClick = {this.handleFriendClicked}>
            Friend
            </button>

            <br />

            <button onClick = {this.handleReactClicked}>
            React
            </button>
        </div>
        )
    }
}


export default HelloWorld