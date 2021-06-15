import React from 'react'
import {Container,Col,Row,FormControl,} from "react-bootstrap"
import Button from "../Button";
import {FaGoogle,FaUser} from "react-icons/fa"
import {Link} from "gatsby"
import "../styles/Signin.css"

const Signin = () => {

    return (
        <Container className="signin">
            <Row className="content">

                <Col>
                <FormControl type="email" required className="inputPlaceholder" placeholder="&#61447; Email" />
                </Col>
                
                <Col>
                <FormControl type="Password" required className="inputPlaceholder" placeholder="&#61475; Password" />   
                </Col>
                
                <Col>
<Button text="Signin"  />
                </Col>

                <Col>
                or
                </Col>

                <Col>
                <Button Icon={<FaGoogle/>} primary={true} text="  Continue with google" >
                
                </Button>
                </Col>

                <Col>
                Don't have an account <Link to="/signup" style={{color:"#0291B9"}}>Signup</Link>
                </Col>

            </Row>
        </Container>
    )
}

export default Signin
