import React from 'react'
import PropTypes from 'prop-types';
//Component
import SneakerItem from './SneakerItem';
import SneakerForm from './SneakerForm';
class Sneakers extends React.Component{
    //prop type control
    static propTypes={
        sneakers: PropTypes.array
    };
    render(){
        const elements=this.props.sneakers.map(sneakers => 
            <SneakerItem
                key={sneakers.id}
                name={sneakers.name}
                price={sneakers.price}
                image={sneakers.image}            
            />
            );
        return(

            <div>
               {elements}
               <SneakerForm/>
            </div>
        )
    }
}
export default Sneakers;