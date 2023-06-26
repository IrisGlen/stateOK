import React, { Component } from 'react';
import { dataArr } from './data';

export default class State extends Component {
    state = {
        id: "1",
    };
    handelChangeColor = (value) => {
        this.setState({id : value});
    };
    renderListData = () => {
        return dataArr.map(({id,price, name, url}) => {
            return (
                <div className="col-4"> 
                    <img className="card-img-top" src={url} alt="Title" />
                    <div className="">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                        <button className="btn btn-success p-3" onClick={() => { this.handelChangeColor(id) }}>
                    Click here to change for model
                </button>
                    </div>    
                </div>
            );
        });
    };
    render() {
        let { id } = this.state;
        return (
            <div className='container'>
            <h2>BTVN_State</h2>
            
            <div className=" text-start row">
                <div className="card-body col-2">
                    <img classname="card-img-top" src="./ex_glasses/glassesImage/model.jpg" alt="Title" width="40%"  />
                </div>
                <div className="card-body col-2" style={{width: '25%'}}>
                    <h5>Model will use with glass: </h5>
                    <img className="card-img-top" src={`./ex_glasses/glassesImage/v${id}.png`} alt="Title"/>
                        {/* console.log({`./ex_glasses/glassesImage/v${id}.png`}) */}
                </div>
            </div>
            
            <div className='row m-3'>
            <h4>Please select color for model:</h4>
                {this.renderListData()}
            </div>
            </div>   
        )
    }
}
