import User from "./User";
import Userclass from "./Userclass";

const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is a food delivering App</h2>
            {/* <User name={"A S"}/> */}


            <Userclass name={"A S (Class)"} location={"Bhopal (class)"}/>
        </div>
    )
}

export default About;