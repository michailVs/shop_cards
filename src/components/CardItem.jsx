import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardItem = ({...props}) => {
    const router = useNavigate()
  return (
    <div className='card'>
        {!props.card.length
        ? <h2>Загрузка...</h2>
        : <div className="card__list">
            {props.card.map(item => 
            <div className="card__item" key={item.id}>
                <img src={item.img} alt={item.title} className="card__img"/>
                <div className="card__text">
                    <h2 className="card__text-title">Название: {item.title}</h2>
                    <p className="card__text-descr">Краткое описание: {item.descr}</p>
                    <p className="card__text-price">Цена: {item.price}</p>
                </div>
                <button className="card__btn" onClick={() => router(`/${item.id}`)}>Learn more</button>
            </div>
            )}
        </div>
        }
    </div>
  )
}

export default CardItem