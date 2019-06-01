import React from 'react'

class Bomb extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: null,
            message: " "
        };
    }

    componentDidMount(){
        let currentCount = 10;

            this.interval = setInterval(()=> {

                this.setState({count: currentCount})

                console.log(currentCount);

                if(currentCount%2 === 0) this.setState({message: "tick!"})
            
                if(currentCount%2 !== 0) this.setState({message: "tock!"})

                if(currentCount < 1) this.setState({message: "BOOM!"})

                if(currentCount === 0 ) clearInterval(this.interval)

                currentCount = currentCount - 1
                
            }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    render(){
        return (
            <div>
                Here is the Bomb Component:
                    <p>
                    {this.state.count} <br/>
                    {this.state.message}
                    </p>
            
            </div>
        )
    }
}

export default Bomb