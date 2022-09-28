import React from 'react'
import styled from 'styled-components'

const HomeMain = () => {
  return (
    <Container className='container'>
        <h1 className='h1'> QUICK, SMART &</h1>
        <h1 className='h1'> GREAT <span className='styled' >SOLUTIONS</span></h1>
        <div className='line'></div>
        <span className='span'>We provide various business services to help our clients to handle different</span>
        <span className='span2'>issues and boost their business.</span>
        
        <button className='button1'>DISCOVER US</button>
        <button className='button1 contact'>CONTACT US</button>
    </Container>
  )
}

export default HomeMain

const Container = styled.div`
    color: white;
    padding: 100px;

    
    .h1{
        font-size: 70px;

      
    }
    .styled{
        color:blue;
        
    }
    .line{
        height: 3px;
        width: 100px;
        background-color: #fff;
        margin-top: 15px;
    } 

    .span{
        display: flex;
        font-size: 90%;
        padding-top: 20px;
    }

    .span2{
        display: flex;
        font-size: 90%;
        margin-top: 5px;
    }

    .button1{
        border: none;
        border-radius: 30px;
        padding: 15px 35px;
        margin-top: 50px;
        background-color: #6689ff;
        color: white;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover{
            background-color: white;
            color: #6689ff;
        }
    }

    .contact{
        margin-left: 45px;
        background-color: #16ccbb;
        &:hover{
            background-color: white;
            color: #16ccbb;
        }
    }
    
`
