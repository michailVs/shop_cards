import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import CardService from '../API/CardService'

const CardInfo = () => {
    const router = useNavigate()
    const params = useParams()
    const [card, setCard] = useState([])
    const getCard = async (id) => {
        const response = await CardService.getById(id)
        setCard([response.data])
    }
    useEffect(() => {
        getCard(params.id)
    }, [])
    return (
        <div>
            <button onClick={() => router('/')}>Back</button>
            {card.map(item => 
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <img src={item.img} alt={item.title} />
                    <p>{item.comments}</p>
                    <p>{item.price}</p>
                </div>
            )}
        </div>
    )
}

export default CardInfo