import React,{Component} from 'react';
import Div1 from './Div1';
import Div2 from './Div2';
import Div3 from './Div3';
import Div4  from './Div4';
import Div5 from './Div5';
import Div6 from './Div6';
import {Data} from './Data';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
class home  extends Component{
  state={
      name:Data,
    one:[
        {image:"../images/image4.jpg"
        ,title:"assddcccccccccccccccccccccdd",h3:"Air ticketing",p:"asdfdsaqwedsaqwesaqwsawsawsw"},
        {image:"../images/image5.jpg"
        ,title:"Cruises"},
        {image:"../images/image6.jpg"
        ,title:"Tour Packaging"},
    ]
    ,fourth:[{image:"../images/image83.jpg"},
    {image:"../images/image69.jpg"},
    {image:"../images/image80.jpg"},
    {image:"../images/image81.jpg"},
    {image:"../images/image72.jpg"},
    {image:"../images/image82.jpg"},
]
,sixth:[
{h3:"Air Ticketing",p:"Our quick staff help you arrange airline of your choice",image:"../images/image31.jpg"},
{h3:"Visa Services",p:"Visa services at economical rate ",image:"../images/image29.jpg"},
{h3:"Cruise",p:"You will definitaly enjoy the  vastness sea with us",image:"../images/image75.jpg"},
{h3:"Acommodation",p:"Best hotels and fine dinning is our pride",image:"../images/image77.jpg"},
{h3:"Tour Guides",p:"Our Guides are very helpfull",image:"../images/image78.jpg"},
{h3:"Train Travel",p:"Train travel is amazing with us",image:"../images/image79.jpg"},
],


}
     render(){

        return(<div>
          <Div1 />
          <Div2 any={this.state.one} />
          <Div3 />
          <Div4  four={this.state.fourth}/>
          <Div5 name={this.state.name} />
          <Div6 any={this.state.sixth}/>
          
           </div>
              )
    }
}
export default home;