import styled, {css, keyframes} from "styled-components"

interface CardInfo {
    name: string,
    idx: number,
    image: string
}

interface CardContent {
    cardInfo: CardInfo
    isFlipped: boolean

}

export default function Card({cardInfo, isFlipped}: CardContent) {

    return (
        <Main 
        
        className={isFlipped ? "flipped" : ""}>
            <div className="content">
                <div className="back">
                <div className="back-content">
                    <strong>Flip Me 
                        <br/>
                        Over
                        :)
                        </strong>
                </div>
                </div>
                <div className="front">

                <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                </div>

                <div className="front-content">
                   
                    <div className="badge">
                        {cardInfo.name}
                        <img
                    src={cardInfo.image}
                    alt=""
                    />
                    </div>
                </div>
                </div>
            </div>
        </Main>
    )
}

const rotation_481 = keyframes`
0% {
    transform: rotateZ(0deg);
}

0% {
    transform: rotateZ(360deg);
}
`

const floating = keyframes`
0% {
    transform: translateY(0px);
}

50% {
    transform: translateY(10px);
}

100% {
    transform: translateY(0px);
}
`

const Main = styled.div`
overflow: visible;
position: relative;
cursor: pointer;
width: 100%;
height: 100%;

.content {
width: 100%;
height: 100%;
transform-style: preserve-3d;
transition: transform 300ms;
box-shadow: 0px 0px 10px 1px #000000ee;
border-radius: 5px;
${props => props.className === 'flipped' && 
    css`
    transform: rotateY(180deg);
    `
}
}




.front, .back {
background-color: #151515;
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
-webkit-backface-visibility: hidden;
border-radius: 5px;
overflow: hidden;
}

.back {
width: 100%;
height: 100%;
justify-content: center;
display: flex;
align-items: center;
overflow: hidden;
}

.back::before {
position: absolute;
content: ' ';
display: block;
width: 100%;
height: 160%;
background: linear-gradient(90deg, transparent, #17C3B2, #17C3B2, #17C3B2, #17C3B2, transparent);
animation: ${rotation_481} 5000ms infinite linear;
}

.back-content {
position: absolute;
width: 99%;
height: 99%;
background-color: #151515;
border-radius: 5px;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
}

.front {
transform: rotateY(180deg);
color: white;
}

.front .front-content {
position: absolute;
width: 100%;
height: 100%;
}

.front-content .badge {
background-color: #00000055;
padding: 2px 10px;
border-radius: 10px;
backdrop-filter: blur(2px);
width: fit-content;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
img {
    width: 40px;
}
}

.front .img {
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
}

.circle {
width: 90px;
height: 90px;
border-radius: 50%;
background-color: #17C3B2;
position: relative;
filter: blur(15px);
animation: ${floating} 2600ms infinite linear;
}

#bottom {
background-color: #179bc3;
left: 50px;
top: 0px;
width: 150px;
height: 150px;
animation-delay: -800ms;
}

#right {
background-color: #17c35f;
left: 160px;
top: -80px;
width: 30px;
height: 30px;
animation-delay: -1800ms;
}
`