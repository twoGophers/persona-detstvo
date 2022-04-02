import React from 'react';

//Style
import './Stock.scss';

//db
import item_stock from '../../db/Item_stock';

export default function StockModal({stockModal}) {
  return (
    <>
        {/*Начало : модалка с услугами */}
            <div className={stockModal ? 'stock' : 'hide'}>
                <div className="stock-block">
                    {item_stock.map(({id, path, color, block, colorBlock, images, title, content, timeStock, timeStockTwo}) => (
                        <a href={path} className="stock-item" key={id} style={{background : color, outline: `1px solid ${color}`}}>
                            <div className={ block ? "stock-item__images" : "hide"}>
                                <img src={images} alt={images} />
                            </div>
                            <div className="stock-content">
                                <div className="stock-item__title">
                                    <span>
                                        {title}
                                    </span>
                                </div>
                                <div className="stock-item__content">
                                    <span>{content}</span>
                                </div>
                                <div className="stock-item__stock-time">
                                    <span>{timeStock}</span>
                                    <span>{timeStockTwo}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <a href="/" className='stock-btn'>Услуги</a>
            </div>
        {/*Конец : модалка с услугами */}
    </>
  )
}
