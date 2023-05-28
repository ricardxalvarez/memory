import styled from "styled-components"
import { useGlobal } from "../global"

export default function Welcome() {
    const { set_game_state } = useGlobal()
    return (
        <Main>
            <div className="title">
                <h1>
                    Welcome to Memory Game! 
                </h1>
                <br/>
                <h2>
                    Are you ready to challenge your memory skills?
                </h2>
                <br/>
                <h4>
                    (Programming languages edition)
                </h4>
            </div>
            <button
            onClick={() => {
                set_game_state('game')
            }}
            >Let's start</button>
        </Main>
    )
}

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 70%;
max-width: 600px;
margin: auto;
.title {
    h1, h2, h4 {
        display: inline;
    }
}
button {
padding: 0.8em 1.8em;
border: 2px solid #17C3B2;
position: relative;
overflow: hidden;
background-color: transparent;
text-align: center;
text-transform: uppercase;
font-size: 16px;
transition: .3s;
z-index: 1;
font-family: inherit;
color: #17C3B2;
margin: 30px;
cursor: pointer;
}

button::before {
content: '';
width: 0;
height: 300%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) rotate(45deg);
background: #17C3B2;
transition: .5s ease;
display: block;
z-index: -1;
}

button:hover::before {
width: 105%;
}

button:hover {
color: #111;
}

`