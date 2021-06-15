import React from 'react'
import {Container,Col,Row,FormControl,} from "react-bootstrap"
import Button from "../Button"
import {FaGoogle,FaUser} from "react-icons/fa"
import {Link} from "gatsby"
import "../styles/Signup.css"

const Signup = () => {

    

    return (
        <Container className="signin">

            <Row className="content">
<h2 style={{textAlign:'center'}}>Register Now</h2>
                <div className="userInfo">

                            <Col>
                                <FormControl type="email" required className="inputPlaceholder" placeholder="&#61447; Email" />
                            </Col>
                            
                            <Col>
                                <FormControl type="text" required className="inputPlaceholder" placeholder="&#61447; Username" />
                            </Col>
                            

                            <Col>
                                <FormControl type="Password" required className="inputPlaceholder" placeholder="&#61475; Password" />   
                            </Col>
                            
                            
                            <Col>
                                <FormControl type="Password" required className="inputPlaceholder" placeholder="&#61475; Confirm password" />   
                            </Col>
                    </div>

                <Col>
<Button style={{width:"300px"}} text="Signup" big="true"  />
                </Col>

                <Col>
                <p style={{textAlign:"center"}}>or</p>
                </Col>

                <Col>
                <Button Icon={<FaGoogle/>} text="  Continue with google" >
                 
                </Button>
                </Col>

                <Col>
                Already have an account <Link to="/login" style={{color:"#0291B9"}}>Signin</Link>
                </Col>

            </Row>
        </Container>
    )
}

export default Signup
