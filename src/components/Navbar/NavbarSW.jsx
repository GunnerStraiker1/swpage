import React , {useState, Component} from 'react'
import {Navbar, NavbarBrand, Nav} from 'react-bootstrap'
import './navbar.css'

class NavbarSW extends Component{

    constructor(props){
        super(props);
        this.state = {
            displayMobile: false
        }
    }
    

    componentWillMount() {
        if(window.innerWidth <= 800){
            this.setState({displayMobile:true});
        }
    
        window.addEventListener('resize',()=>{
        if(window.innerWidth <= 800){
            this.setState({displayMobile:true});
        }
        else{
            this.setState({displayMobile:false})
        }
        });
    }

    render(){
        return(
            <Navbar expand="lg" collapseOnSelect fixed="top">
                <Navbar.Brand>
                    <img className="imgBrand" id="imgBrand" src="https://dx35vtwkllhj9.cloudfront.net/disney/star-wars-the-force-awakens/images/regions/es/tt.png" alt="Logo SW"/>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto"> 
                        <Nav.Link href="#movies">Movies</Nav.Link>
                        <Nav.Link>Characters</Nav.Link>
                        <Nav.Link>Important Battles</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default (NavbarSW)