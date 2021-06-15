import React from 'react'
import styled from "styled-components";
import {Link} from "gatsby";

 const Buttons = ({text,Icon})=>{
    return (
<Button>
{Icon}
{text}
</Button>
    )
}





const Button =styled(Link)`
background: ${({primary}) => (primary ? '#0291B9' :'#077BF1')};
white-space:nowrap;
padding:${({big}) => (big ? '16px 30px' : '10px 14px')};
color:#fff;
font-size:${({big}) => (big ? '18px' : '14px')};
width:"300px"
outline:none;
border:none;
cursor:pointer;
text-decoration:none;
transition:0.2s !important;
border-radius:${({round}) => (round ? '50px' : 'none')};

&:hover{
    background: ${({primary}) => (primary ? '#077BF1':'#0291B9')};
    transform:translateY(-2px);
}
`

export default Buttons