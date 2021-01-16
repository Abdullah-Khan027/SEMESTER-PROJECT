import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


export const Bg = () => {
    return (
        <div >
        <h1 className="text1">
                 BOYS & GIRLS COLLECTION
             </h1>
             <div className="container">
             <div className="row">
             <div className="col-6">
             <div className="text">
             
                 <div className="ec_img">
                    <a href="#"> <img src="/picture/bg1.jpg" width="550px" /></a>
                     </div>
                 </div>
                 </div>

                 <div className="col-6">
                     <div className="ec_img">
                         
                         <a href="#"> <img src="/picture/bg2.jpg" width="550px"/></a>
                     </div>
                 </div>

</div>
        </div>

        <Carousel className="abcd">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/picture/bg5.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/picture/bg6.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/picture/bg7.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<div >
        <h1 className="text1">
                 
             </h1>
            <div className="container">
             <div className="row">
             <div className="col-6">
             <div className="text">
             
                 <div className="ec_img">
                    <a href="#"> <img src="/picture/bg3.jpg" width="550px" /></a>
                     </div>
                 </div>
                 </div>

                 <div className="col-6">
                     <div className="ec_img">
                         
                         <a href="#"> <img src="/picture/bg4.jpg" width="550px"/></a>
                     </div>
                 </div>

</div>
</div>
</div>
<hr/>
</div>
     
    )
}
