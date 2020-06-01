import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Carousel from '../carousel/initialCarousel'
import { Container, Row, Col } from "react-bootstrap";
import Movies from "../../views/Movies/Movies";

import './sections.css'

export default class bgParallax extends Component{

    render(){
        return(
            <div>
                <Parallax
                bgImage={"https://cdn.wallpapersafari.com/1/97/co341S.jpg"}
                // renderLayer={percentage => (
                //     <div>
                //       <div
                //         style={{
                //           position: "absolute",
                //           background: `transparent`,
                //           left: "80%",
                //           top: "50%",
                //           borderRadius: "50%",
                //           transform: `translate(${percentage * -75}%,-50%)`,
                //           width: percentage * 800,
                //           height: percentage * 800,
                //           textAlign: "center"
                //         }}
                //       >
                          
                //           <img src="https://vignette.wikia.nocookie.net/starwars/images/c/cb/Star_Destroyer.png/revision/latest?cb=20161110013025" alt="star destryer" width="100%"/>
                //       </div>
                //       <div
                //         style={{
                //           position: "absolute",
                //           background: `transparent`,
                //           left: "20%",
                //           top: "50%",
                //           borderRadius: "50%",
                //           transform: `translate(${percentage * -70}%,-50%)`,
                //           width: percentage * 800,
                //           height: percentage * 800,
                //           textAlign: "center"
                //         }}
                //       >
                          
                //           <img src="https://vignette.wikia.nocookie.net/es.starwars/images/4/47/Rebels-TantiveIVConceptArt-CroppedBackground.png/revision/latest?cb=20171016180243" alt="Tantive IV" width="100%"/>
                //       </div>
                //     </div>
                //   )}
                >
                <div style={{marginTop:"8rem"}}>
                    <Row>
                        <Col sm={{span: 12}}>
                            <Carousel />
                        </Col>
                    </Row>   
                </div> 
                {/* <div style={{height:"80em"}}></div> */}
                </Parallax>
                <Parallax
                bgImage={"https://cdn.wallpapersafari.com/1/97/co341S.jpg"}
                renderLayer={percentage => (
                    <div>
                      <div
                        style={{
                          position: "absolute",
                          background: `transparent`,
                          left: "85%",
                          top: "15%",
                          borderRadius: "50%",
                          transform: `translate(${percentage * -75}%,-50%)`,
                          width: percentage * 800,
                          height: percentage * 800,
                          textAlign: "center"
                        }}
                      >
                          
                          <img src="https://vignette.wikia.nocookie.net/starwars/images/c/cb/Star_Destroyer.png/revision/latest?cb=20161110013025" alt="star destryer" width="100%"/>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          background: `transparent`,
                          left: "5%",
                          top: "15%",
                          borderRadius: "50%",
                          transform: `translate(${percentage * -70}%,-50%)`,
                          width: percentage * 800,
                          height: percentage * 800,
                          textAlign: "center"
                        }}
                      >
                          
                          <img src="https://vignette.wikia.nocookie.net/es.starwars/images/4/47/Rebels-TantiveIVConceptArt-CroppedBackground.png/revision/latest?cb=20171016180243" alt="Tantive IV" width="100%"/>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          background: `transparent`,
                          left: "5%",
                          top: "35%",
                          borderRadius: "50%",
                          transform: `translate(${percentage * -70}%,-50%) rotateY(180deg)`,
                          width: percentage * 800,
                          height: percentage * 800,
                          textAlign: "center"
                        }}
                      >
                          
                          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c52cfd32-9473-4939-abb6-1aed39529c1f/dbvd17c-f32c3b57-d693-45b0-a0f0-fd560dfa5bea.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzUyY2ZkMzItOTQ3My00OTM5LWFiYjYtMWFlZDM5NTI5YzFmXC9kYnZkMTdjLWYzMmMzYjU3LWQ2OTMtNDViMC1hMGYwLWZkNTYwZGZhNWJlYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.5Gwtu2sv6xra0Caop3L0AKgjP7IyLb5TEW9xmmYZ2pg" alt="Venator Classs Cruiser" width="100%"/>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          background: `transparent`,
                          left: "85%",
                          top: "33%",
                          borderRadius: "50%",
                          transform: `translate(${percentage * -70}%,-50%) rotateY(0deg)`,
                          width: percentage * 800,
                          height: percentage * 800,
                          textAlign: "center"
                        }}
                      >
                          
                          <img src="https://i.pinimg.com/originals/40/35/69/40356918d6ea3ea4d5fd4abc037466d6.png" alt="Separatist Cruiser" width="100%"/>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          background: `transparent`,
                          left: "10%",
                          top: "60%",
                          borderRadius: "50%",
                          transform: `translate(${percentage * -70}%,-50%)`,
                          width: percentage * 800,
                          height: percentage * 800,
                          textAlign: "center"
                        }}
                      >
                          
                          <img src="https://www.pngkit.com/png/full/225-2254923_magister-class-star-destroyer-role-star-wars-star.png" alt="Dreadnought First Order" width="100%"/>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          background: `transparent`,
                          left: "85%",
                          top: "55%",
                          borderRadius: "50%",
                          transform: `translate(${percentage * -70}%,-50%) rotateY(180deg)`,
                          width: percentage * 800,
                          height: percentage * 800,
                          textAlign: "center"
                        }}
                      >
                          
                          <img src="https://wiki.swgoh.help/images/5/56/Unit-Ship-Raddus.png" alt="Raddus" width="100%"/>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          background: `transparent`,
                          left: "10%",
                          top: "85%",
                          borderRadius: "50%",
                          transform: `translate(${percentage * -70}%,-50%)`,
                          width: percentage * 800,
                          height: percentage * 800,
                          textAlign: "center"
                        }}
                      >
                          
                          <img src="https://vignette.wikia.nocookie.net/starwarsrebels/images/a/ab/Ghost.png/revision/latest?cb=20150306172128" alt="Ghost Ship" width="75%"/>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          background: `transparent`,
                          left: "95%",
                          top: "80%",
                          borderRadius: "50%",
                          transform: `translate(${percentage * -70}%,-50%) rotateY(180deg)`,
                          width: percentage * 800,
                          height: percentage * 800,
                          textAlign: "center"
                        }}
                      >
                          
                          <img src="https://i.ya-webdesign.com/images/death-star-png-transparent-6.png" alt="Death Star" width="120%"/>
                      </div>
                    </div>
                  )}
                >
                  <div>
                    <Row>
                      <Col sm={{span: 8, offset: 2}}>
                            <Movies />
                        </Col>
                    </Row>
                  </div>

                </Parallax>


                    {/* <ParallaxLayer factor={1} offset={0}>
                        <img src="https://vignette.wikia.nocookie.net/starwars/images/c/cb/Star_Destroyer.png/revision/latest?cb=20161110013025" alt="star destryer" width="30%"/>
                    </ParallaxLayer> */}
            </div>
        )
    }
}
