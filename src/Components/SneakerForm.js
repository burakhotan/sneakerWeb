import React from 'react';

class SneakerForm extends React.Component{
    addButton = ()=>{
        console.log('Added');
    }
    render(){
        return(
            <div>
                <button onClick={this.addButton}>
                    Add
                </button>
            </div>
        )
    }
}
export default SneakerForm;