import React from 'react'
import styled from "styled-components"
import { useStaticQuery , graphql } from 'gatsby'
import Img from "gatsby-image";
import Button from "./Button";
import { ImLocation } from "react-icons/im"

const Categories = ({heading}) => {
     const data = useStaticQuery(graphql`
     query CategoryQuery{
         allCategoryJson {
             edges {
               node {
                 alt
                 button
                 name
                 img {
                   childImageSharp {
                     fluid(maxWidth: 384) {
                       ...GatsbyImageSharpFluid
                     }
                   }
                 }
               }
             }
           }
         }
     `)

     function getCategory(data){
         const categoryArray=[]
         data.allCategoryJson.edges.forEach((item,index) => {
             categoryArray.push(
                 <CategoryCard key={index}>
                 <CategoryImg 
                  src={item.node.img.childImageSharp.fluid.src}
                 alt={item.node.alt}
                 fluid={item.node.img.childImageSharp.fluid}/>
                 <CategoryInfo>
                   <TextWrap>
                     <ImLocation/>
                     {/* <CategorySubTitle>{item.node.alt}</CategorySubTitle> */}
                     <CategoryTitle>{item.node.name}</CategoryTitle>
                   </TextWrap>
                   
                 </CategoryInfo>
                 </CategoryCard>
                 
             )
         })
         return categoryArray
     }

    return (
        <CategoryContainer>
        <CategoryHeading>{heading}</CategoryHeading>
        <CategoryWrapper>{getCategory(data)}</CategoryWrapper>
        <Button to="/category" primary="true" round="true" text="More Categories" ></Button>
        </CategoryContainer>

    )
}

export default Categories

const CategoryContainer = styled.div`
height: 100vh;
padding: 2rem calc((100vw - 1300px) /2);
color:#fff;
`

const CategoryHeading = styled.div`
font-size:clamp(1.2rem, 5vw, 3rem);
text-align:center;
margin-bottom: 3rem;
color:#000;
`

const CategoryWrapper =styled.div`
display:grid;
grid-template-columns:repeat(4, 1fr);
grid-gap:10px;
justify-items:center;
padding:0 2rem;

@media screen and (max-width:1200px){
  grid-template-columns:1fr 1fr;
}
@media screen and (max-width:868px){
  grid-template-columns:1fr;
}
`

const CategoryCard = styled.div`
line-height:2;
width:100%;
height:450px;
position:relative;
border-radius:10px;
transition:0.2s ease;
`

const CategoryImg= styled(Img)`
height:100%;
max-width:100%;
position:relative;
border-radius:10px;
filter:brightness(70%);
transition:0.4s cubic-bezier(0.075, 0.82, 0.165, 1);


&:hover{
  filter:brightness(100%);
}`

const CategoryInfo = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding:0 2rem;

@media screen and (max-width:280px){
  padding:0 1rem;
}
`

const TextWrap = styled.div`
display:flex;
align-items:center;
position:absolute;
top:375px;
`
const CategoryTitle = styled.div`
font-weight:800;
font-size:1rem;
margin-left:0.5rem;
color:#fff;
`

// const CategorySubTitle = styled.div`
// font-weight:800;
// font-size:1rem;
// margin-left:0.5rem;
// color:#fff;
// `