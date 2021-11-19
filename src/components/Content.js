import React from "react";
import {Container, Row, Col, Image, Card} from 'react-bootstrap'
import '../FolderCSS/Content.css'

function Content () {
    return (
        <Container>
                <br/>
                <div className="title">
                  <h2 style={{textAlign: "center", marginTop:"100px"}}>ABOUT</h2>
                </div>
                <Row>
                    <Col lg={2} md={6}>
                        <Image src="https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" className="jarak" />
                        <Image src="https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" className="jarak" />
                    </Col>
                    <Col lg={5} md={6}>
                        <Image src="https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" className="jarakItem"/>

                    </Col>
                    <Col lg={5} md={6}>
                        <Card className="card" style={{border:"none", fontFamily:"Georgia, 'Times New Roman', Times, serif;"}}>
                            <p>Bali Island is a small beautiful island and a part of Indonesia archipelago, and the most famous of Indonesian tourism in the world. </p>
                            <p>Bali Island has many places of interest such as rice paddies, beautiful panorama, volcanoes, tourism activities as well as attractions. Also, it also has beautiful jungle, long sandy beaches, warm blue water, crashing surf and friendly people.</p>
                            <p>Bali enchants with its dramatic dances and colorful ceremonies, its arts, and crafts, to its luxurious beach resorts and exciting nightlife. And everywhere, you will find intricately carved temples.</p>
                        </Card>
                    </Col>
                </Row>
                <br/><br/><br/>
            </Container>
    )
}

export default Content;