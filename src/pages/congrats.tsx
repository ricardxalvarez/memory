import styled from "styled-components"

export default function Congrats() {
    return (
        <Main>
            <h1>
                Congrats!
            </h1>
            <h3>
                You're so goddamn clever
            </h3>
            <h5>Would you like to play some more?</h5>
            <button
            onClick={() => {
                window.location.reload()
            }}
            >Click here</button>
        </Main>
    )
}

const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
h1, h2, h5 {
    margin: 0;
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
margin: 15px;
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