import React from 'react'

class RouletteGun extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            message: "Pull the trigger to play Russian Roulette"
        }
    }

    triggerPulled = () => {

        console.log("The triggerPulled event handler was activated");
       
        this.setState({spinningTheChamber: true, message: "Spinning the chamber..."})  
        
        this.timeout = setTimeout(()=> {

           console.log("setTimout function ran after two seconds");
           this.spinningTheChamber = false;
           let r = Math.floor(Math.random() * 8) + 1;  
           this.setState({chamber: r})
           console.log("random number equals: ")
           console.log(r)
           let p = this.props.bulletInChamber;
           console.log("the number passed in from props equals: ")
           console.log(p);
           if(r === p){
               this.setState({message: "BANG!"})
           }

           if(r !==p){
               this.setState({message: "You're safe!"})
           }

        }, 1000)
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    render(){
        return(
            <div>
            <p>{this.state.message}</p>
            <button onClick={this.triggerPulled}>Pull the trigger</button>
            </div>
        )
    }
}

export default RouletteGun