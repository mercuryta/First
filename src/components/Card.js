import styled from "styled-components"
import { BsCloudDrizzle } from "react-icons/bs"
import { MdKeyboardArrowRight } from "react-icons/md"


const Card = () =>{

    return(
        <CardStyle className="container">
            <div className="card_item">

                <div className="icon">
                    <BsCloudDrizzle />
                </div>

                <div className="title">Marketing Strategy</div>
                <div className="description">Whether bringing new amazing are products and services to market discovering new ways</div>

                <button className="arrow">
                    <MdKeyboardArrowRight className="rightarrow"/>
                </button>
            </div>  
            <div className="card_item">

                <div className="icon">
                    <BsCloudDrizzle />
                </div>

                <div className="title">Smartphone Repair</div>
                <div className="description">Whether bringing new amazing are products and services to market discovering new ways</div>

                <button className="arrow">
                    <MdKeyboardArrowRight className="rightarrow"/>
                </button>
            </div>  
            <div className="card_item">

                <div className="icon">
                    <BsCloudDrizzle />
                </div>

                <div className="title">Web Development</div>
                <div className="description">Whether bringing new amazing are products and services to market discovering new ways</div>

                <button className="arrow">
                    <MdKeyboardArrowRight className="rightarrow"/>
                </button>
            </div>  
           
        </CardStyle>
    )
}


export default Card

const CardStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    .card_item{
        position: relative;
        padding: 55px 30px;
        background-color: white;
        text-align: center;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 3px solid white;
        transition: all 0.3s ease;
        &:hover {
            border: 3px solid #0c5adb;
            .arrow{
                background-color: #0c5adb;
                transition-duration:0.5s;
                svg{
                    color: white;
                }
            }
        }
        .icon{
            background-color: #0c5adb;
            width: 95px;
            height: 95px;
            border-radius: 50%;
            margin-bottom: 33px;
            display: flex;
            justify-content: center;
            align-items: center;
           
            svg{
                color: white;
                font-size: 50px;
            }
            
        }
        .arrow{
            width: 50px;
            height: 50px;
            justify-content: center;
            align-items: center;
            display: flex;
            border: 2px solid #0c5adb;
            border-radius: 50%;
            margin-left: 0px;
            background-color: white;
            position: absolute;
            bottom:-27px;
            left: calc(50% - 25px);
            svg{
                color: #0c5adb;
                font-size: 50px;
            }

            &:hover{
                background-color: #0c5adb;
                transition-duration:0.5s;
                svg{
                    color: white;
                }
            }
        }
    }

    
    .title{
       font-weight: bold;
       font-size: large;
       line-height: 50px;
    }

    .description{
        padding: 20px;
    }

    
`
