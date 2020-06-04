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
                    <Nav.Link href="#">
                        <img className="imgBrand" id="imgBrand" src="https://dx35vtwkllhj9.cloudfront.net/disney/star-wars-the-force-awakens/images/regions/es/tt.png" alt="Logo SW"/>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" style={{width: "max-content"}}> 
                        <Nav.Link href="#skywalker">Skywalker Saga</Nav.Link>
                        <Nav.Link href="#spin">Spin Offs</Nav.Link>
                        <Nav.Link href="#soon">Coming Soon</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default (NavbarSW)