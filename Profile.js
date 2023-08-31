class Profile extends React.Component{
    constructor(props){
        super(props);
        //creating state
        this.state = {
            userInfo{
                name: "Dummy Name",
                location: "Dummy Location",
            },
        };
        console.log("Child-Constructor")
    }
    async componentDidMount(){
        //API calls
        const data = await fetch("https://api.github.com/users/samyuktha-samyu");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log("Child - componentDidMount")
    }
    render(){
        const {count} = this.state;
        console.log("Child - render")
        return(
            <div>
                <h1>Profile Component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name} </h2>
                <h2>Location: {this.state.userInfo.location}</h2>
                
            </div>
        );
    }
}
export default Profile;