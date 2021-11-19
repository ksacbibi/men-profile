import React from 'react';

class Greet extends React.Component {

    constructor(props){
        super(props);

        this.state = {val: "Welcome!"};
    }


    changeValue = () => {
        this.setState(
            {val: "Wagwan"}
        );
    }

    render(){
        return(
            <div>
                <h1>{this.state.val}</h1>
                <button type="button" onClick={this.changeValue}>Translate</button>
            </div>
        );
    }
}


export default Greet;