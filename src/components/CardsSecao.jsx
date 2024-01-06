import { useState } from 'react'
import Card from './Card'
import LISTA_CARDS from '../listaCards'
import GameOver from './GameOver'

export default function CardsSecao() {
    LISTA_CARDS.sort(() => Math.random() - 0.5)

    const [ cards, setCards ] = useState([...LISTA_CARDS.map(innerArr => [...innerArr].map(obj => {return {...obj}}))])
    const [ choice, setChoice ] = useState([])

    let isVerifing = false
    
    function changeVisibility(rowIndex, colIndex) {
        setCards(prevCards => {
            const updatedCards = [...prevCards.map(innerArr => [...innerArr])]
            updatedCards[rowIndex][colIndex].isVisible = !updatedCards[rowIndex][colIndex].isVisible
            return updatedCards
        })
    }

    function verifyChoices() {
        if(choice[0].value !== choice[1].value) {
            changeVisibility(choice[0].row, choice[0].col)
            changeVisibility(choice[1].row, choice[1].col)
        }
        setChoice([])
        isVerifing = false
    }

    function handleClick(event, rowIndex, colIndex) {
        setChoice(prevChoice => {
            const updatedChoice = [...prevChoice]
            updatedChoice.push({
                row: rowIndex,
                col: colIndex,
                value: event.target.innerText
            })
            return updatedChoice
        })
        changeVisibility(rowIndex, colIndex)

    }

    function verifyWinner() {
        for (const rowCards of cards) {
            for(const card of rowCards) {
                if(!card.isVisible) {
                    console.log(card.value)
                    return false
                }
            }
        }
        return true
    }

    if(choice.length === 2) {
        isVerifing = true
        setTimeout(verifyChoices, 1000)
    }

    return (
        <section className='cards-section'>
            {!verifyWinner() ? cards.map((row, rowIndex) => (
                <Card key={rowIndex} row={row} rowIndex={rowIndex} handleClick={handleClick} isVerifing={isVerifing}/>
            )) : <GameOver setCards={setCards}/>}
        </section>
    )
}