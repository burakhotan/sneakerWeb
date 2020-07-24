import React from 'react';

//CSS
import '../SneakerItem.css'
class SneakerItem extends React.Component{
    render(){
        const {name,price,image}=this.props;
        return(
            <div>
                <h1 className="name">{name}</h1>
                <div className='imageContainer'> 
                    <img src={image} className="sneaker-pic" alt="sneaker" />
                </div>
                <p className='price'>{price}</p>
            </div>
        )
    }
}
export default SneakerItem;