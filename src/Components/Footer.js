import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Footer = () => {
    
return (
    
        <Container>
                <Row  className="Foot">
                    <Col>
                    <h6>NEED HELP?</h6>
                    
                    <a href="#"><li>+92 21 111 112 111</li></a>
                    <a href="#"><li>9AM-10PM , MON-SAT</li></a>
                    <a href="#"><li>eshop@junaidjamshed.com</li></a>
                    
                    </Col>
                    
                    <Col>
                    <h6 >CUSTOMER SERVICE</h6>
                    <a href="#"><li><Link to="/Contact">Contact Us</Link></li></a>
                    <a href="#"><li>Delivery & Orders</li></a>
                    <a href="#"><li>Returns & Exchanges</li></a>
                    <a href="#"><li>Terms & Conditions</li></a>
                    <a href="#"><li>Privacy Policy</li></a>
                    <a href="#"><li><Link to="/Track">Track My Order</Link></li></a>
                  
                    </Col>
                    
                    <Col>
                    <h6>COMPANY</h6>
                    <a href="#"><li><Link to="/Contact">About Us</Link></li></a>
                    <a href="#"><li>Careers</li></a>
                    <a href="#"><li>Store Locator</li></a>


                    </Col>

                    <Col>
                    <h6>FOLLOW US</h6>
                    <a href="#"><li>WhatsApp</li></a>
                    <a href="#"><li>Facebook</li></a>
                    <a href="#"><li>Instagram</li></a>
                    <a href="#"><li>Twitter</li></a>
                    <a href="#"><li>YouTube</li></a>


                    </Col>
                </Row>
            <hr />       
        </Container>
       
        
    
    )
}


