import React from "react";
import Usercontext from "../utils/Usercontext";
class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
           count:0,
           count2:1,
           userinfo:{
            name:"Ayush",
            location:"default"
           }
        };
    }

    async componentDidMount(){

        this.timer=setInterval(()=>{
            console.log("nothing")
        },1000)

        //Api calls like useeffect in functional component
        const data= await fetch("https://api.github.com/users/AyushSahu1306");

        const json=await data.json();

        this.setState({
            userinfo:json,
        })
       // console.log(userinfo);
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will unmount");
    }
    render(){
      
        const{ count,count2}=this.state;
        const{ name,location,avatar_url}=this.state.userinfo;
        // debugger;
        return (
            
            <div className="user-card">

            <div> 
                LoggedIn User 
                <Usercontext.Consumer>
                   {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>} 
                </Usercontext.Consumer>    
            </div> 
            <h1>Count : {count}</h1>
           <button onClick={()=>{
            //Never update state variables directly
            this.setState({
                count:count+1,
                count2:this.state.count2+1
            })
           }}>Count Increase</button>
           <br></br>
               <img src={avatar_url}></img>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h3>contact @sahuayush</h3>
            </div>
        )

    }
}

export default Userclass;