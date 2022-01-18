import React from 'react';
import './ModalItem.scss';
import Btn_icon from '../ui/Btn_icon';
import { useState, useEffect} from 'react';


export default function Modal({active, setActive, children, listModal}) {

let {color, ageMobile, list, images} = children;

const [itemList, setItemList] = useState(listModal);

let showHeader = () => {
    let header = document.querySelector('.header');
    header.style.display = 'block';
}

    return (
        <div className={active ? 'modal-item active' : 'modal-item'} 
                style={{background : color}}
                onClick={() => setActive(false)}
                >
            <div className="modal-item__content" 
                onClick={e => e.stopPropagation()}>
                <div className="modal-item__header">
                    <div className={active ? 'modal-item__header-title modal-item__header-title-active' : 'modal-item__header-title'}>
                        Популярные услуги для детей от {ageMobile}
                    </div>
                    <div className="modal-item__header-close"
                    onClick={() => {
                        setActive(false);
                        showHeader();
                        }}>
                        <div className="main__close-btn"
                            //style={{ background : color, borderRadius : `1px solid ${color}`}}
                            >
                        </div>
                    </div>
                </div>
                <div className={active ? "modal-item__content modal-item__content-active" : "modal-item__content"}>
                    {itemList.map(item => (
                        <ul key={item.key}>
                            <li><Btn_icon></Btn_icon> <a href="/">{item.text}</a></li>
                        </ul>
                    ))}
                </div> 
                <div className="modal-item__img">
                        <img src={images} alt={images} />
                </div>
            </div>
        </div>
    )
}
