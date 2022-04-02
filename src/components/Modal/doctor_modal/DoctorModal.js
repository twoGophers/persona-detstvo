import React from 'react';
import { useState, useEffect} from 'react';

// img list Doctor
import DoctorModalImg from '../../../assets/images/Doctor.png';
// import IconUserDoctor from '../../../assets/images/doctors/doctor-no-img.png';
import FilterDoctor from '../../../assets/images/doctors/filter.svg';
import FilterDoctorWhite from '../../../assets/images/doctors/filterWhite.svg';
import CloseBlockProfession from '../../../assets/images/doctors/x-10329.svg';

//db
import item_doctor from '../../db/Item_doctor';

//Style
import './DoctorModal.scss';

// Pagination
import { Pagination } from "react-pagination-bar"
import 'react-pagination-bar/dist/index.css'

export default function DoctorModal({doctorModal}) {

// Категории докторов в выпадающем блоке
let profDoctor = [
    {id : 1, prof : 'Все'},
    {id : 2, prof : 'Логопед'},
    {id : 3, prof : 'Невролог'},
    {id : 4, prof : 'Хирург'},
    {id : 5, prof : 'Эндокринолог'},
];

// Переключение картинки при клике на Выбрать специальность
const [imgFilterImg, setImgFilterImg] = useState(false);

// Показ выбора специальности докторов при клике на Выбрать специальность
const [show_block_filter_doctor, setShow_block_filter_doctor] = useState(false);

// Список карточек докторов из базы
const [profileDoctor, setProfileDoctor] = useState(item_doctor);

// Начало : Фильтр докторов
const profile_doctor = (item) => {

    if(item === 'Все') {
        setProfileDoctor(item_doctor);
        return;
    };

    const filteredDoctor = item_doctor.filter( it => it.prof === item);
    setProfileDoctor(filteredDoctor);
    paginatoinItem(filteredDoctor);
};
// Конец : Фильтр докторов


// Начало : Пагинация в модальном окне
const [currentPage, setCurrentPage] = useState(1);
const pagePostsLimit = profileDoctor.length;

let paginatoinItem = (filteredDoctor) => {
    let paginationItemBD = profileDoctor;
    if(filteredDoctor) {
        paginationItemBD = filteredDoctor;
    }
    return paginationItemBD;
};

useEffect(() => {
paginatoinItem();
}, [])
// Конец : Пагинация в модальном окне

    return (
        <>
            
        {/* Начало : модалка с врачами */}
        <div className={doctorModal ? "modal-doctor" : "hide"}>
                <div className="modal-doctor__header">
                    <div className="modal-doctor__header-content">
                        <span className='modal-doctor__header_title'>«Здоровье детей — <br/> наша главная ценность»</span> 
                        <span className='modal-doctor__header_content'>Иванова Софья</span>  
                        <span className='modal-doctor__header_content'>Зав. педиатрическим  отделением</span>
                    </div>
                    <div className="modal-doctor__header-img">
                        <img src={DoctorModalImg} alt={DoctorModalImg} />
                    </div>
                </div>

                {/* Начало : Кнопка выбора по категориям */}
                    <div className="modal-doctor__main user-doctor">
                        <div className="user-doctor__filter">
                            <span>Выберите специальность:</span>

                            {/* Начало : Выпадающее меню с направлением деятельности врачей  */}
                                <button className='btn user-doctor__filter-btn' 
                                    onMouseOver={() => setImgFilterImg(true)} 
                                    onMouseLeave={() => setImgFilterImg(false)} 
                                    onClick={() => setShow_block_filter_doctor(true)}>
                                    Все 
                                    <img src={imgFilterImg ? FilterDoctorWhite : FilterDoctor} alt={imgFilterImg ? FilterDoctorWhite : FilterDoctor} />
                                </button>
                        

                                <div className={show_block_filter_doctor ? "user-doctor__filter-profession profession" : "hide"}>
                                    <div className="profession__header">
                                        <button className='btn profession-btn'
                                            onClick={() => setShow_block_filter_doctor(false)}>
                                            <img src={CloseBlockProfession} alt={CloseBlockProfession} />
                                        </button>
                                    </div>

                                    {/* Начало : фильтрация по категориям деятельности, клик в блоке */}
                                        <div className="profession__content">
                                            {profDoctor.map(item => (
                                                <ul key={item.id}>
                                                    <li onClick={() => profile_doctor(item.prof)}>{item.prof}</li>
                                                </ul>
                                            ))}
                                        </div>
                                    {/* Конец : фильтрация по категориям деятельности, клик в блоке */}
                                </div>
                            {/* конец : Выпадающее меню с направлением деятельности врачей  */}    
                        </div>                  

                        {/*Начало : Карточка докторов */}
                            <div className="user-doctor__cart">
                                { profileDoctor
                                .slice(
                                    (currentPage - 1) * pagePostsLimit,
                                    (currentPage - 1) * pagePostsLimit + pagePostsLimit
                                )
                                .map(({id, images, name, surname, middleName, profile}) => (
                                    <div className="doctor_block" key={id}>
                                        <img className="doctor_block_img" src={require('../../../assets/images/doctors/' + images)} alt="" />
                                        <div className="doctor_block_content">
                                            <p className="doctor_block_content-name">{name}</p>
                                            <p className="doctor_block_content-surname">{surname}</p>
                                            <p className="doctor_block_content-patronymic">{middleName}</p>
                                            <div className="doctor_block_content-specializator">
                                                {profile}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <Pagination 
                                    initialPage={currentPage}
                                    itemPerPage={pagePostsLimit}
                                    onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
                                    // totalItems={profileDoctor.length}
                                    totalItems={0}
                                    onlyPageNumbers={true}
                                />
                            </div>
                        {/*Конец : Карточка докторов */}

                    </div>
                {/* Конец : Кнопка выбора по категориям */}
            </div>
        </>
    )
}