import React from "react";

class ClassComponent extends React.Component {
    constructor(){
       console.log('inside constructor...')
       super();
        this.state = {
            firstName : "ram"
        };
    }

    static getDerivedStateFromProps(props,state){
        console.log('inside getderivedstatefromprops')
        
        return(
            {
                firstName:'shyam'
            }
        )
    }

    componentDidMount(){
        console.log('inside componentdid mount');
            this.setState({firstName:'rahul'})
        
    }

    shouldComponentUpdate(){
        console.log('inside shouldcomponent update....');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevStates){
        console.log('inside getSnapshotBeforeUpdate....');
        console.log(prevProps);
        console.log(prevStates);
        return null;
    }
    componentDidUpdate(props,states,snapshot){
        console.log('inside component did update .....')
        console.log(snapshot);
    }

    render(){
       console.log('inside render.....')
       console.log(this.state);
        return( 
            <div>
                <button onClick={()=>this.setState({firstName:'dipak'})}>{this.state.firstName}</button>
               <p> the name is {this.state.firstName}</p>
              { console.log(this.state)}
            </div>
            
        );
    }
}

export default ClassComponent;