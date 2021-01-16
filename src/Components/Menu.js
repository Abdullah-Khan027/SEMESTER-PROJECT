import React from 'react'
import { Container,Navbar,NavDropdown,Row,Col,Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export const Menu = () => {

return (
   
<Navbar  variant="link lg-dark"  >
    
<Container  className="contact-content" >
    

  <NavDropdown  title="new arrival">
  
    <Row className="coll" >
    
        
   
 {/* Women Winter */}
            
        <Col  md={6} xs={12} >
              
        <NavDropdown.Item href="#"><Link to="/Na">WOMEN WINTER</Link></NavDropdown.Item>
              <NavDropdown.Divider />
             
              <Link to="/Na"> <img src="/picture/w.jpg" width="250px" height="444px"/> </Link>

        </Col>
  
            {/* MEN Winter*/}
  
        <Col  md={6} xs={12}>
        
        <NavDropdown.Item href="#mwc"><Link to="/Na">MEN'S WINTER</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              
             
              <Link to="/Na"><a href="#"><img src="/picture/m.jpg" width="250px" /></a></Link>

              
        </Col>


    </Row>

</NavDropdown>

{/* EXCLUSIVE COLLECTION */}

<NavDropdown  title="exclusive collection" >

<Row className="coll" >

{/* CLOTHING */}
<Col  md={6} xs={12} >
              

              <h5>women stitched-special edition</h5>

              <NavDropdown.Item href="#"><Link to="/Ec">stitched collection</Link></NavDropdown.Item>


              <NavDropdown.Item href="#name">kurti collection</NavDropdown.Item>
              
              
              <NavDropdown.Item href="#shawl">shawl collection</NavDropdown.Item>


    </Col>

    <Col md={6} xs={12}>

            <h5> </h5>
            <NavDropdown.Divider />
            <img src="/picture/Tassur.jpg" width="280px" />
        </Col>

</Row>
</NavDropdown>

{/* WOMEN */}

<NavDropdown  title="WOMEN" >

<Row className="coll">
<Col  md={6} xs={12}>


<h5>stitched</h5>
    <NavDropdown.Divider />
   
    <NavDropdown.Item href="#"><Link to="/Women">1 piece</Link></NavDropdown.Item>
    <NavDropdown.Item href="#2_piece">2 piece</NavDropdown.Item>
    <NavDropdown.Item href="#3_piece">3 piece</NavDropdown.Item>

 <h5>other</h5>
    <NavDropdown.Item href="#jewellery">jewellery</NavDropdown.Item>
    
</Col>

<Col md={6} xs={12}>

           <img src="/picture/WOMEN.png" />

        </Col>

</Row>
</NavDropdown>

{/* MEN */}

<NavDropdown  title="MEN" >

<Row className="coll" >

{/* CLOTHING */}
<Col  md={6} xs={12} >
              
              
<Link to="/Men"> <a href="#"> <h5>groom collection</h5></a> </Link>
              <NavDropdown.Item href="#">Sherwani</NavDropdown.Item>
              <NavDropdown.Item href="#g_shawl">grooms shawl</NavDropdown.Item>
              <NavDropdown.Item href="#s_kurta">special kurta</NavDropdown.Item>
              <NavDropdown.Item href="#t_boys">teen boys</NavDropdown.Item>
              <NavDropdown.Item href="#k_boys">kid boys</NavDropdown.Item>


    </Col>

        <Col md={6} xs={12}>

            <img src="/picture/MEN.png" />


        </Col>

</Row>
</NavDropdown>

{/* BOYS & GIRLS */}

<NavDropdown  title="boys & girls" >

<Row className="col2" >

{/* CLOTHING */}
<Col >
              
<Link to="/Bg">   <a href="#"><h5>ALL BOYS & GIRLS COLLECTION</h5></a> </Link>
              <NavDropdown.Divider />
             
         <a href="#"><img src="/picture/kid_girls_10.jpg" width="200px" /></a> 
          
        </Col>

</Row>
</NavDropdown>


{/* FRAGRANCES */}


<NavDropdown  title="fragrances" >

<NavDropdown.Item href="#"><Link to="/F">MEN'S AND WOMEN FRAGRANCES</Link></NavDropdown.Item>
</NavDropdown>


{/* MAKEUP */}

<NavDropdown  title="makeup" >
<NavDropdown.Item href="#"><Link to="/Makeup">MAKEUP COLLECTION</Link></NavDropdown.Item>


</NavDropdown>
</Container>

</Navbar>  
 
 
    )
}
