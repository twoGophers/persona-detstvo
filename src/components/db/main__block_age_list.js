import baby from '../../assets/images/Baby0-1.png';
import girl from '../../assets/images/Girl4.png';
import boy from '../../assets/images/Skater1.png';

    let main__block_age_list = [
        {
            id : 1, 
            age : '0-1', 
            ageName : 'год',
            ageMobile : '0 до 1 года', 
            color : 'linear-gradient(137.64deg,#ffa2a2 0,#ffbab6 97.97%)',
            images : baby,
            status : false,
            positionRight : `-22%`,
            positionMobile : {
                background : 'linear-gradient(137.64deg,#ffa2a2 0,#ffbab6 97.97%)',
            },
            display : `none`,
            backgroundPosition : `10%`,
            list : [
                {key : 1, text : 'Патронаж'},
                {key : 2, text : 'Вакцинация'},
                {key : 3, text : 'Прием педиатра'},
                {key : 4, text : 'УЗИ'},
                {key : 5, text : 'Неонатальный скрининг'},
            ],
        },
        {
            id : 2, 
            age : '1-3', 
            ageName : 'годa', 
            ageMobile : '1 до 3 лет', 
            color : 'linear-gradient(145deg,#80c1b7 0,#8fceca 97.97%)',
            images : girl,
            status : false,
            positionRight : `-13%`,
            positionMobile : {
                background: 'linear-gradient(145deg,#80c1b7 0,#8fceca 97.97%)',
            },
            display : `none`,
            backgroundPosition : `10%`,
            list : [
                {key : 1, text : 'Вызов врача на дом'},
                {key : 2, text : 'Прием педиатра'},
                {key : 3, text : 'Вакцинация'},
                {key : 4, text : 'УЗИ'}
            ],
        },
        {
            id : 3, 
            age : '3-18', 
            ageName : 'лет',
            ageMobile : '3 до 8 лет', 
            color : 'linear-gradient(137.64deg,#ff9e80 0,#ffc9ab 97.97%)',
            images : boy,
            status : false,
            positionRight : `-5%`,
            positionMobile : {
                background : 'linear-gradient(137.64deg,#ff9e80 0,#ffc9ab 97.97%)',
            },
            display : `none`,
            backgroundPosition : `10%`,
            list : [
                {key : 1, text : 'Вызов врача на дом'},
                {key : 2, text : 'УЗИ'},
                {key : 3, text : 'Лабораторные исследования'},
                {key : 4, text : 'Прием невролога'}
            ],
        },
    ];

    export default main__block_age_list;