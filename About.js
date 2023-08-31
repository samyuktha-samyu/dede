import React from "react";
import Profile from "./Profile";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        //Best place to make an API call
        console.log("Parent componentDidMount");
    }
    render(){
        console.log("Parent render");
        return(
            <div>
                <h1>About this Page</h1>
                <p>
                    This is the React
                </p>
                <Profile name="sam" xyz="abdc/>
            </div>
        );
    };

}
export default About;