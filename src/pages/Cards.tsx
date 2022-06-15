import React from 'react';
import card from '../card.png';
interface IShopArr {
  id: number;
  title: string;
  likes: number;
  cost: number;
}

const shopArr: IShopArr[] = [
  { id: 1, title: 'Свитер', likes: 12, cost: 1200 },
  { id: 2, title: 'Кофта', likes: 5, cost: 300 },
  { id: 3, title: 'Шорты', likes: 0, cost: 5555 },
  { id: 4, title: 'Штаны', likes: 23, cost: 3222 },
  { id: 5, title: 'Брюки', likes: 6, cost: 430 },
  { id: 6, title: 'Тапочки', likes: 1, cost: 0 },
];

const Cards = () => {
  return (
    <div className="cards__wrapper">
      {shopArr.map((item) => (
        <div key={item.id} className="card">
          <img src={card} alt="#" height="150px" />
          <span>{item.title}</span>
          <span>{item.likes} Лайков</span>
          <span>Цена: {item.cost}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
