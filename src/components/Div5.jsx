import React,{Component} from 'react';
class Div5 extends Component{
render(){
    var marya=this.props.name.map(
        (index,i=>{
            return(
                <h1 key={i}>{index.name}</h1>
            )
        })
    )
    return(
        <div className="fifth">
        <video controls>
            <source src="../images/Travelpk2.mp4" type="video/mp4"/>
        </video>
        <h1>{index.name}</h1>
        </div>
    )
}

}
export default Div5;