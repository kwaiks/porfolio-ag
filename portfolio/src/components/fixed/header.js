import React, {Component} from 'react';


let lastScrollY;

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"nigga",
            scrolled:false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = ()=>{
        lastScrollY = window.scrollY;
        if(lastScrollY > 60){
            
        }
        console.log(lastScrollY + " px")
    }

    changeName = () =>{
        return this.setState({name:"Ganti"})
    }
    render(){
        const {name,scrolled} = this.state
        return(
            <nav>
                <ul>
                    <li>{name}</li>
                    <li>b</li>
                </ul>
            </nav>
        );
    }
}

export default Header;