import React ,{Component} from 'react';
class Div6 extends Component{
    render(){
        var response=this.props.any.map(
            (index,i)=>{
                return(
                    <div className="sixx" key={i}>
                   <h3>{index.h3}</h3> 
                   <p>{index.p}</p>
                   <img src={index.image}/>
                    </div>
                )
            }
        )
        
        return(
            <div className="sixth">
            <h1>Our Services</h1>
            {response}
            </div>
        )
    }

}
export default Div6;