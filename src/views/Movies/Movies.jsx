import React, {Component} from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import './movies.css'

const originalMovies = [
    {url: "https://images-na.ssl-images-amazon.com/images/I/61AZSQsCpEL._AC_SY879_.jpg"},
    {url: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
    {url: "https://i.pinimg.com/originals/65/63/5c/65635c6fa9531c8e3efb57a71ecfd4de.jpg"}

]
const precuels = [
    {url: "https://i.pinimg.com/originals/5e/d8/1c/5ed81c40def663a45769c8c21f8cf597.jpg"},
    {url: "https://i.frog.ink/j5Eozwnv/swnmr94254_600.jpg?v=1566138099.947"},
    {url: "https://images-na.ssl-images-amazon.com/images/I/71MKj4j-isL._AC_SY679_.jpg"}
]
const secuels = [
    {url: "https://monster-poster.com/site/wp-content/uploads/2016/11/VF_0188-e1478741247117.jpg"},
    {url: "https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._AC_SL1200_.jpg"},
    {url: "https://images-na.ssl-images-amazon.com/images/I/71S1KdAH8xL._AC_SY741_.jpg"}
]
const spinoffs = [
    {url: "https://www.cinemascomics.com/wp-content/uploads/2020/04/star-wars-the-clone-wars.jpg"},
    {url: "https://vignette.wikia.nocookie.net/es.starwars/images/e/e4/Rogue_One_Una_Historia_de_Star_Wars.jpg/revision/latest?cb=20161014014337"},
    {url: "https://www.ecartelera.com/images/noticias/fotos/46300/46305/3.jpg"},
    {url: "https://vignette.wikia.nocookie.net/es.starwars/images/c/c5/Star_Wars_Rebels_Season_Two_Official_Poster.png/revision/latest?cb=20150419090833"},
    {url: "https://vignette.wikia.nocookie.net/es.starwars/images/4/45/TheMandalorianS1Poster.png/revision/latest?cb=20190824064722"}
]

export default class Movies extends Component{
    render(){
        return(
            <div className= "newSection" id="movies">
                <h1>The Complete Saga</h1>
                <Container fluid className="movieContainer">
                    <div className="subtitle"> 
                        <h3>original Movies (1977-1983)</h3>
                    </div>
                    <Row>
                        {
                            originalMovies.map((movie, key)=>{
                                return(
                                    <Col sm={4} key={key}>
                                        <Card className="movieCard"> 
                                            <Card.Body>
                                                <img src={movie.url} alt="" className="movieImg"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className="subtitle">
                        <h3>Prequels (1999- 2005) </h3>
                    </div>
                    <Row>
                        {
                            precuels.map((movie, key)=>{
                                return(
                                    <Col sm={4} key={key}>
                                        <Card className="movieCard"> 
                                            <Card.Body>
                                                <img src={movie.url} alt="" className="movieImg"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className="subtitle">
                        <h3>Sequels (2015-2019)</h3>
                    </div>
                    <Row>
                        {
                            secuels.map((movie, key)=>{
                                return(
                                    <Col sm={4} key={key}>
                                        <Card className="movieCard"> 
                                            <Card.Body>
                                                <img src={movie.url} alt="" className="movieImg"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className="subtitle">
                        <h3>Spin off Movies and Series</h3>
                    </div>
                    <Row>
                    {
                            spinoffs.map((spin, key)=>{
                                return(
                                    <Col sm={4} key={key}>
                                        <Card className="movieCard"> 
                                            <Card.Body>
                                                <img src={spin.url} alt="" className="movieImg"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}