import styled from "styled-components"
import Card from "../components/card"
import programming_languages from '../programming_languages.json'
import { useState, useEffect } from "react";
import { useGlobal } from "../global";

export default function Game() {

    const {set_game_state} = useGlobal()
    
    interface CardInfo {
        name: string,
        idx: number,
        image: string
    }
    const [memory_cards, set_memory_cards] = useState<Array<CardInfo>>([])
    
    useEffect(() => {
        function randomCards(arr: Array<any>, num: number) {
            //  get random items of array
            const shuffled = [...arr].sort(() => 0.5 - Math.random());
            arr = shuffled.slice(0, num);
    
            // duplicate items of array, since we want to match two pairs of cards
            const duplicate = arr.reduce(function (res, current) {
                return res.concat([current, current]);
            }, []);
    
            arr = duplicate
            
            // add an index to each item, so we'll know which card is flipped
            const indexedArray = arr.map((item, idx) => {
                return {...item, idx}
            })
    
            arr = indexedArray
    
            // shuffle array once its items are duplicated 
            let currentIndex = arr.length,  randomIndex;
    
            while (currentIndex !== 0) {
    
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
            
                // And swap it with the current element.
                [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex], arr[currentIndex]];
            }
            
    
            return arr
        }
        set_memory_cards(randomCards(programming_languages, 6))
    }, [])
    

    const [selectedCards, setSelectedCards] = useState<Array<CardInfo>>([])

    const [matchedCards, setMatchedCards] = useState<Array<CardInfo>>([])

    const [triesLeft, setTriesLeft] = useState<number>(8)

    function flipCard (card: any) {
        if (selectedCards.includes(card)) return
        if (matchedCards.includes(card)) return
        if (selectedCards.length > 1) return
        const newList = [...selectedCards, card]
        setSelectedCards(newList)

        if (selectedCards.length && newList.every(item => item.name === newList[0].name)) {
            const newMatchedCards = [...matchedCards, ...newList]
            setMatchedCards(newMatchedCards)
            setSelectedCards([])

            if (newMatchedCards.length === memory_cards.length) {
                set_game_state('congrats')
            }
        }
        else if (newList.length > 1) {
            const newTriesLeft = triesLeft - 1
            setTriesLeft(newTriesLeft)
            if (newTriesLeft === 0) {
                set_game_state('game_over')
            }
            setTimeout(() => {
                setSelectedCards([])
            }, 2000)
        }
    }

    return (
        <Main>
            {
                memory_cards.map((card, idx) => {
                    return (
                        <div
                        key={idx}
                        onClick={() => flipCard(card)}
                        >
                            <Card
                            isFlipped={
                                selectedCards.includes(card)
                                || matchedCards.includes(card)
                            }
                            cardInfo={card}
                            />
                        </div>

                    )
                })
            }
            <Tries>
                Tries:
                {triesLeft}
            </Tries>
        </Main>
    )
}

const Main = styled.div`
display: grid;
justify-content: center;
grid-template-columns: repeat(3, minmax(100px, 350px));
gap: 15px;
height: calc(100vh - 40px);
margin: 20px;
position: relative;
`

const Tries = styled.div`
    position: absolute;
    right: -10px;
    top: -10px;
    background-color: #494949ac;
    padding: 10px;
`