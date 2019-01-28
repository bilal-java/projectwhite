import React,{Component} from 'react';
class Div4 extends Component{
    
    render(){
        var response=this.props.four.map(
            (index,i)=>{
                return(
                    <div className="firstt" key={i}>
                    <img src={index.image} alt=""/>
                    </div>
                )
            }
            
        )
        return(
            <div className="fourth">
            <h1>Our Destinations</h1>
            <p> We love to explore the World</p>
            {response}
            </div>
        )
    }
}
export default Div4;