import React, {Component} from 'react';
    class Div2 extends Component{

render(){
    
    var response=this.props.any.map(
        (index,i)=>{
            return(
         
                   <div className="blogs" key={i}>
                    <img src={index.image}/>
                    <div className="title">{index.title}</div>
                    <h3>Air ticketing</h3>
                    <p>zsawsaqweswsawsaqwsawss</p>
                    </div>
              
    
        
                )
            }
        )
   
    return(
        <div>
 <div className="second">
   {response}                 
                    </div>
        </div>
    )
}
}
export default Div2;
