import React from 'react'
import styled from "styled-components";
import Img from "gatsby-image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "./Button";
import { useStaticQuery ,graphql } from 'gatsby';

const Freelance = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: 
            {ext: {regex: "/(jpg)|(png)|(jpeg)/"}
            name: {in: ["user1","user2"]}
        }) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    `)
    return (
        <FreelanceContainer>
            {/* <TopLine>
                Join Now!!
            </TopLine>
            <Description>
                What people are saying
            </Description> 
            <FaRegLightbulb> react-cions/fa
            */}
            <ContentWrapper>
                <ColumnOne>
                <Freelancer>
                    <p><IoMdCheckmarkCircleOutline/></p>
                    <h1>Embrace the freelance revolution</h1>
                    <h3>There's never been a better time to take yourself online and start making money from your very own fine-tuned set of skills.</h3>
                </Freelancer>
                <Freelancer>
                    <Button to="/join-as-a-freelancer" primary="true" round="true" >Join as A Freelancer</Button>
                </Freelancer>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                ))}
                </ColumnTwo>
            </ContentWrapper>
        </FreelanceContainer>
)
}

export default Freelance


const FreelanceContainer =styled.div`
width:100%;
background:#fcfcfc;
color:#000;
padding: 5rem calc((100vw - 1300px) / 2);
height:100%;
`

// const TopLine =styled.p`
// color:#077bf1;
// font-size:1rem;
// padding-left:2rem;
// margin-bottom:0.75rem;`

// const Description = styled.p`
// text-align:start;
// padding-left:2rem;
// margin-bottom:4rem;
// font-size:clamp(1.5rem, 5vw , 2rem);
// font-weight:bold;
// `

const ContentWrapper = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
padding: 0 2rem;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`

const ColumnOne =styled.div`
display:grid;
${'' /* grid-template-rows:1fr 1fr; */}


@media screen and (max-width:500px){
    grid-tmplate-columns:1fr;
    padding:0;
    margin-bottom:25px;
    top:0;
}

`

const Freelancer = styled.div`
margin-top:100px;
padding-top:1rem;
padding-right:2rem;

h1{
    margin-bottom:1rem;
    font-style:bold;
}
h3{
    color:#3b3b3b;
}

p{
    color:#f9b19b;
    font-size:3rem;
    margin-bottom:1rem;
}
`

const ColumnTwo = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
margin-top:2rem;
grid-gap:5px;

@media screen and (max-width:500px){
    grid-tmplate-columns:1fr;
}`

const Images= styled(Img)`
border-radius:10px;
height:100%;
`