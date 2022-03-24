
import React, {useState, useRef} from 'react';

let list = [
    {
        id : 1,
        text : 'Аркадий'
    },
    {
        id : 2,
        text : 'Барбара'
    },
    {
        id : 3,
        text : 'Генадий'
    },
    {
        id : 4,
        text : 'Лера'
    },
];


export default function Test() {

let inputRef = useRef(null);
let [itemUser, setItem] = useState(list);

let showList = () => {
    let filterUser = list.filter(item => item.text.toLowerCase().includes(inputRef.current.value));
    setItem(filterUser);
};

  return (
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={showList}>Click</button>
        <ul>
            {itemUser.map((user, index) => {
                return <li key={user.id}>{user.text}</li>
            })}
        </ul>
    </div>
  );
}
