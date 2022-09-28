import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Header = () => {
    const [ classNameSwitch, setClassNameSwitch ] = useState("")

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
    },[])

   
    const handleScroll = () => {
        if (window.pageYOffset > 10) {
            setClassNameSwitch("fixed")
        }
        else{
            setClassNameSwitch("")
        }
    }

  return (

    <HeadStyled >
        <div className={`parent ${classNameSwitch}`}>
            <div className='container'>
                <div>
                    <img src='/logog.webp' />
                </div>
                <div className='menu_parent'>
                    <div className='items active'>HOME</div>
                    <div className='items'>ABOUT US</div>
                    <div className='items'>SERVICE</div>
                    <div className='items'>NEWS</div>
                    <div className='items'>CONTACT</div>
                </div>
            </div>
        </div>
    </HeadStyled>
  )
}


export default Header

const HeadStyled = styled.div`
    /* position: fixed; */
    
    .parent{
        position:relative;
        /* position: fixed; */
    }

    .fixed{
        position: fixed;
        width: 100%;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.8);
        transition-duration: 1s;
    }
  
    .container{
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .menu_parent{
            display: flex;
            font-weight: 500;
            /* gap: 10px; */
            padding: 20px;
            color: white;
        
            .items{
                position: relative;
                padding: 0px 15px;
                font-size: 13px;
                cursor: pointer;
                &:before{
                    content: "";
                    position: absolute;
                    height: 2px;
                    width: 0%;
                    background-color: white;
                    bottom: 0px;
                    left: 0;
                    transition: all 0.3s ease;
                }
                &:hover{
                    &:before{
                        width: 100%;
                    }
                    /* border-bottom: 2.5px solid white; */
                }
            }

            .active{
                &:before{
                    width: 100%;
                }
            }
        }
    }
    
`

