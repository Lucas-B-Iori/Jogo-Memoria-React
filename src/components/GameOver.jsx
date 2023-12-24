import LISTA_CARDS from '../listaCards'

export default function GameOver({ setCards }) {
    function restartGame() {
        setCards(LISTA_CARDS)
    }
    return (
        <div className="gameover">
            <h2>Parabéns, você ganhou!</h2>
            <button onClick={restartGame}>Reiniciar</button>
        </div>
    )
}