import React, {Component} from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import './movies.css'

const originalMovies = [
    {   movieTitle:"Star Wars: A New Hope",
        anio:"1977",
        url: "https://images-na.ssl-images-amazon.com/images/I/61AZSQsCpEL._AC_SY879_.jpg",
        description:"The evil Galactic Empire have governed the galaxy for almost 20 years with fear and oppression. A civil war has begun, the Rebels have a plan to destroy the Empire's ultimate weapon, the Death Star, a space station with power to destroy an entire planet. A farmer, a princess, a smuggler, a Wookie and two droids are the hope for the galaxy",
        importantEvents:[
            {title:"Tantive 4 captured", url:"https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/star_wars_movies_darth_vader_carrie_fisher_leia_organa_david_prowse_1600x1200_wallpaper_www.wallfox_net_59.jpg"},
            {title:"Luke Skywalker and Ben Kenobi", url:"https://starwarsblog.starwars.com/wp-content/uploads/2016/09/Changing-of-the-Lightsabers1.jpeg"},
            {title:"Battle of Yavin 4", url:"https://vignette.wikia.nocookie.net/es.starwars/images/b/bd/Battle_of_Yavin.png/revision/latest?cb=20170624193616"},
            {title:"Death Star destroyed", url:"https://janeymackenstreet.files.wordpress.com/2018/06/0b8df-battleshandofgod2b020.jpg"}
        ]
    },
    {   movieTitle:"Star Wars: The Empire Strikes Back",
        anio:"1980",
        description:"The Rebels are hidden from the Empire, they are found them, and they have to escape. Luke has a vision and meets with master Yoda to train to be a Jedi. The Millennium Falcon is pursuit by the Darth Vader's Star Destroyer. They escape to Bespin but are ambushed there by Darth Vader and Boba Fett, Luke try to help them, but he will find a horrible truth",
        url: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        importantEvents:[
            {title:"Battle of Hoth", url:"https://vignette.wikia.nocookie.net/starwars/images/a/ab/Walker_Assault_DICE.png/revision/latest?cb=20151111031527"},
            {title:"Training with Yoda", url:"https://starwarsblog.starwars.com/wp-content/uploads/2020/05/certain-pov-luke-dagobah-02_TALL.jpg"},
            {title:"Ambush in Bespin", url:"https://sixactstructure.com/wp-content/uploads/2016/11/Torture-1024x459.png"},
            {title:"Darth Vader", url:"https://www.cinemascomics.com/wp-content/uploads/2019/11/luke-vs-darth-vader-bespin.jpg"}
        ]
    },
    {   movieTitle:"Star Wars: The Return of the Jedi",
        anio:"1983",
        description:"Han Solo has been captured by Boba Fett, all his friends try to rescue him from Jabba the Hutt, meanwhile, the Empire has begun the construction on a new Death Star, now the Rebels led by Admiral Akbar and Luke as a Jedi, are going to destroy the new weapon and the Empire in one last final battle and free the galaxy once for all.",
        url: "https://i.pinimg.com/originals/65/63/5c/65635c6fa9531c8e3efb57a71ecfd4de.jpg",
        importantEvents:[
            {title:"Saving Han Solo", url:"data:image/jpeg;base64,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"},
            {title:"The Emperor Arrives", url:"https://imgix.bustle.com/inverse/18/34/d8/ca/ea4b/4ca2/b0ec/9e28480e12a9/palpatine-in-his-throne-inreturn-of-the-jedi.jpeg?w=349&h=212.36859323882226&auto=format%2Ccompress&cs=srgb&q=70&fit=max&crop=faces"},
            {title:"Battle of Endor", url:"https://vignette.wikia.nocookie.net/es.starwars/images/6/65/Battle_of_Endor.png/revision/latest?cb=20161009040624"},
            {title:"Celebration", url:"https://arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/S5I7BIE535GTJN5AGOTZ2XZ2AI.jpg"}
        ]
    }

]
const precuels = [
    {
        movieTitle:"Star Wars: The Phantom Menace",
        anio:"1999",
        url: "https://i.pinimg.com/originals/5e/d8/1c/5ed81c40def663a45769c8c21f8cf597.jpg",
        description:"32 BBY, The Galactic Republic is in troubles, the trade federation has increased the taxation and have made sanctions to different systems, also they have blocked the little planet of Naboo. While the Senate endlessly debates, the Supreme Chancellor secretly has sent two Jedi Knights to settle the conflict.",
        importantEvents:[
            {title:"Meet Anakin Skywalker", url:"https://i.pinimg.com/originals/df/63/57/df6357d42d5b342cbd8508d52b645970.jpg"},
            {title:"Battle of Naboo", url:"https://lumiere-a.akamaihd.net/v1/images/naboo-history-2-retina_04d8519f.jpeg?region=0%2C0%2C1200%2C513"},
            {title:"Darth Maul", url:"https://i.insider.com/5509dbffecad04da08cdcdf0?width=983&format=jpeg"},
            {title:"Chancellor Palaptine", url:"https://vignette.wikia.nocookie.net/es.starwars/images/2/28/Senator_palpatine.png/revision/latest/scale-to-width-down/340?cb=20160707034616"}
        ]
    },
    {
        movieTitle:"Star Wars: The Attack of the Clones",
        anio:"2002",
        url: "https://i.frog.ink/j5Eozwnv/swnmr94254_600.jpg?v=1566138099.947",
        description:"Has been passed 10 years from the Naboo battle, the separatist movement leader, Count Dooku, and his droid army make difficult to the Jedis maintain the peace and order. War times approach, and now members from the Galactic Senate are being threatened o murdered.",
        importantEvents:[
            {title:"Anakin and Padme", url:"https://www.cheatsheet.com/wp-content/uploads/2020/02/anakin_padme.jpg"},
            {title:"Count Dooku", url:"https://cdn.hipwallpaper.com/i/68/96/UOPalq.jpg"},
            {title:"Battle of Geonosis", url:"https://vignette.wikia.nocookie.net/starwars/images/e/e4/Battle_of_Geonosis.png/revision/latest?cb=20170325151752"},
            {title:"Clone Army", url:"https://vignette.wikia.nocookie.net/starwars/images/7/7d/Grand_army_formation.jpg/revision/latest?cb=20090918154725"}
        ]
    },
    {
        movieTitle:"Star Wars: The Revenge of the Siths",
        anio:"2005",
        url: "https://images-na.ssl-images-amazon.com/images/I/71MKj4j-isL._AC_SY679_.jpg",
        description:"The Republic with his clone army has been fighting against the Separatist Movement and his droid army, in a dare movement, the General Grievous has kidnapped the Supreme Chancellor, and has attack the heart of the Republic. Also, Anakin is seduced to the dark side by Lord Sidious, Obi Wan try to kill General Grievous and free Utapau. But then, they discover that Palpatine is Sidious, and he executes the Order 66, a massive Jedi purge.",
        importantEvents:[
            {title:"", url:"https://vignette.wikia.nocookie.net/starwars/images/3/34/Spacebattle.jpg/revision/latest?cb=20091019154628"},
            {title:"", url:"https://i.ytimg.com/vi/Fpc_w7kibRo/maxresdefault.jpg"},
            {title:"", url:"https://pm1.narvii.com/6618/6fe349d794228d93e73f6fa46fcd39b1bd3903a1_hq.jpg"},
            {title:"", url:"data:image/jpeg;base64,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"}
        ]
    }
]
const secuels = [
    {
        movieTitle:"Star Wars: The Force Awakens",
        anio: "2015",
        url: "https://monster-poster.com/site/wp-content/uploads/2016/11/VF_0188-e1478741247117.jpg",
        description:"34 ABY, Luke Skywalker has disappeared, no one knows where he is, meanwhile, the First Order, hidden on beyond the Outer Rim, rises from the ashes of the Empire. A race has begun to find Skywalker, the only way to find him is with a map that a BB unit has, BB-8 unit is found by Rey, a scavenger from Jakkú and with Finn, a First Order deserter and Poe Dameron have to deliver that droid to the Rebellion before Kylo Ren  and the First Order find them.",
        importantEvents:[
            {title:"", url:"https://www.lavanguardia.com/r/GODO/LV/p4/WebSite/2017/01/18/Recortada/img_fpuig_20160215-171727_imagenes_lv_terceros_rey_-_star_wars-kX-U4134665712750n-992x558@LaVanguardia-Web.jpg"},
            {title:"", url:"https://sm.ign.com/ign_es/news/s/star-wars-/star-wars-the-force-awakens-kylo-ren-is-not-a-sith_jn2k.jpg"},
            {title:"", url:"https://img1.cgtrader.com/items/2325436/7d26f182ed/starkiller-base-3d-model-max-obj.jpg"},
            {title:"", url:"https://i.ytimg.com/vi/GG-EF1juSww/maxresdefault.jpg"}
        ]
    },
    {
        movieTitle:"Star Wars: The Last Jedis",
        anio: "2017",
        url: "https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._AC_SL1200_.jpg",
        description:"After the Starkiller Base and Hosnian Prime was destroyed, the First Order started to conquest planets, the Rebels, led by Leia Organa, had to escape quickly, but they've been intercepted by the Supreme Leader Snoke and the First Order's dreadnoughts cruisers. Rey has to persuade Luke to train her and help the Rebellion, in her training, she starts to experiment a binding with Kylo Ren by the Force, and then, they killed Snoke, but Kylo becomes the new Supreme Leader and Luke dies after saving the Rebellion using the Force.",
        importantEvents:[
            {title:"", url:"https://vignette.wikia.nocookie.net/starwars/images/3/30/Snoke_chillin_like_a_villain.png/revision/latest?cb=20180711225254"},
            {title:"", url:"https://ojosdecafe.com/img/upload/articles/2017/star-wars-the-last-jedi-15.jpg"},
            {title:"", url:"https://www.cinepremiere.com.mx/wp-content/uploads/2019/10/Star-Wars-relacin-de-Rey-y-Kylo-Ren.jpg"},
            {title:"", url:"https://www.comicbookmovie.com/images/articles/banners/162223.jpg"}
        ]
    },
    {
        movieTitle:"Star Wars: The Rise of Skywalker",
        anio: "2019",
        url: "https://images-na.ssl-images-amazon.com/images/I/71S1KdAH8xL._AC_SY741_.jpg",
        description:"The Emperor is alive! After all, the Emperor using the Force has transfer his soul to a clone inside a Sith temple. Now Kylo Ren and Rey have to find two wayfinders to localize Exegol, the Emperor where Palapatine is, on the journey, Rey tries to pass Kylo to the light side of the Force, and she makes it, Kylo Ren is Ben Solo, son of Leia and Han and together defeat the Emperor,  and all the spacecrafts fight together against the First Order, but Ben dies and Rey restore the balance to the Force.",
        importantEvents:[
            {title:"", url:"https://holacine.com.ar/wp-content/uploads/2019/12/La-resurrecci%C3%B3n-de-Palpatine-se-explica-hilarantemente-en-el-video-animado-de-Star-Wars-9.jpg"},
            {title:"", url:"https://s1.eestatic.com/2019/12/18/cultura/cine/Critica_de_cine-Star_Wars-Estrenos_de_cine-Cine_452965268_140748352_1024x576.jpg"},
            {title:"", url:"https://vignette.wikia.nocookie.net/memorydelta/images/3/30/Battle_of_Exegol.jpg/revision/latest?cb=20200406032757"},
            {title:"", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOJYjmSGwR4UMphvMu9T7rbflEEZ_VevNNFeZTFc_gN0IV2T1Q&usqp=CAU"}
        ]
    }
]
const spinoffs = [
    {url: "https://www.cinemascomics.com/wp-content/uploads/2020/04/star-wars-the-clone-wars.jpg"},
    {url: "https://vignette.wikia.nocookie.net/es.starwars/images/c/c5/Star_Wars_Rebels_Season_Two_Official_Poster.png/revision/latest?cb=20150419090833"},
    {url: "https://vignette.wikia.nocookie.net/es.starwars/images/e/e4/Rogue_One_Una_Historia_de_Star_Wars.jpg/revision/latest?cb=20161014014337"},
    {url: "https://www.ecartelera.com/images/noticias/fotos/46300/46305/3.jpg"}
    
]

const comingSoon = [
    {url:"https://vignette.wikia.nocookie.net/es.starwars/images/4/45/TheMandalorianS1Poster.png/revision/latest?cb=20190824064722"},
    {url:"https://www.guioteca.com/tv-internacional/files/2020/04/trailer-serie-obi-wan-kenobi-2.jpg"}
]

export default class Movies extends Component{
    render(){
        return(
            <div className= "newSection">
                <h1 id="skywalker">The Skywalker Saga</h1>
                <Container fluid className="movieContainer">
                    <div className="subtitle"> 
                        <h3>original Movies (1977-1983)</h3>
                    </div>
                    <Row>
                        {
                            originalMovies.map((movie, key)=>{
                                return(
                                    <Col sm={12} key={key} className="col-movies">
                                        <Card className="movieCard">
                                            <Card.Header className="movieCard-header">{movie.movieTitle} ({movie.anio})</Card.Header> 
                                            <Card.Body>
                                                <Row>
                                                    <Col sm={4}>
                                                        <img src={movie.url} alt="" className="movieImg"/>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <p>{movie.description}</p>
                                                            </Col>
                                                            <Col md={12}>
                                                                <h4>Important Events</h4>
                                                                <Row>
                                                                {
                                                                    movie.importantEvents.map((event) =>{
                                                                        return(      
                                                                            <Col md={6} className="eventImg">
                                                                                <Image src={event.url} fluid/>
                                                                            </Col>
                                                                        )
                                                                    })
                                                                }
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
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
                                    <Col sm={12} key={key} className="col-movies">
                                        <Card className="movieCard">
                                            <Card.Header className="movieCard-header">{movie.movieTitle} ({movie.anio})</Card.Header> 
                                            <Card.Body>
                                                <Row>
                                                    <Col sm={4}>
                                                        <img src={movie.url} alt="" className="movieImg"/>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <p>{movie.description}</p>
                                                            </Col>
                                                            <Col md={12}>
                                                                <h4>Important Events</h4>
                                                                <Row>
                                                                {
                                                                    movie.importantEvents.map((event) =>{
                                                                        return(      
                                                                            <Col md={6} className="eventImg">
                                                                                <Image src={event.url} fluid/>
                                                                            </Col>
                                                                        )
                                                                    })
                                                                }
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
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
                                    <Col sm={12} key={key} className="col-movies">
                                        <Card className="movieCard">
                                            <Card.Header className="movieCard-header">{movie.movieTitle} ({movie.anio})</Card.Header> 
                                            <Card.Body>
                                                <Row>
                                                    <Col sm={4}>
                                                        <img src={movie.url} alt="" className="movieImg"/>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <p>{movie.description}</p>
                                                            </Col>
                                                            <Col md={12}>
                                                                <h4>Important Events</h4>
                                                                <Row>
                                                                {
                                                                    movie.importantEvents.map((event) =>{
                                                                        return(      
                                                                            <Col md={6} className="eventImg">
                                                                                <Image src={event.url} fluid/>
                                                                            </Col>
                                                                        )
                                                                    })
                                                                }
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    {/* <Row>
                        {
                            spinoffs.map((spin, key)=>{
                                return(
                                    <Col md={3} key={key}>
                                        <Card className="movieCard"> 
                                            <Card.Body>
                                                <img src={spin.url} alt="" className="movieImg"/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row> */}
                </Container>
                <h1 id="spin">Spin offs and Series</h1>
                <Container fluid className="movieContainer">
                    <Row>
                        {
                            spinoffs.map((spin, key)=>{
                                return(
                                    <Col md={3} key={key} className="col-movies">
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

                <h1 id="soon">Coming Soon</h1>
                <Row>
                    {
                        comingSoon.map((soon, key)=>{
                            return(
                                <Col md={{span:3, offset:2}} key={key}>
                                    <Card className="movieCard"> 
                                        <Card.Body>
                                            <img src={soon.url} alt="" className="movieImg"/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}