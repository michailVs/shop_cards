import { useEffect, useState } from "react"
import CardService from "../API/CardService"
import CardItem from "./CardItem"

const CardList = () => {
    const [card, setCard] = useState([])
    const getCard = async () => {
        const response = await CardService.getAll()
        setCard([...response.data])
    }
    useEffect(() => {
        getCard()
    }, [])
    return (
        <div className="card">
            <h1>Каталог товаров</h1>
            <div >
                <CardItem card={card}/>
            </div>
        </div>
    )
}

export default CardList