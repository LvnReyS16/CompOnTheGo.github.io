import React from 'react';

export default class ProductItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }



    render() {
        const { image } = this.props;
        return (
            <div  style={{ marginBottom: "10px" }}>
              
                    <img  src={image.image} alt="" />
                   

            </div>
        )
    }
}
