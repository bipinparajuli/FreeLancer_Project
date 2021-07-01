import React from 'react'
import Layout from '../components/layout'
import {Container,Row,Col} from "react-bootstrap"
import {howWeWork} from '../data/MenuData'
import Card from '../components/Utils/Cards/Cards'
import '../components/styles/how-we-works.css'


const howworks = () => {
    return (        
<Layout>
    <header>
<p>WE WORK HARD, WE PLAY HARD</p>
<h1>Work With Us</h1>
    </header>
    <main>
        <Container>
            <h2>HOW WE WORKS</h2>
            <h5>Get Started with our easy steps</h5>
<Row>

{howWeWork.map(data=>(
    <Col>
    <Card title={data.title} text={data.text} />
    </Col>
))}

</Row>

        </Container>

    </main>

</Layout>
    )
}

export default howworks
