import React from 'react';

const items = [
    {name:"lait"},
    {name:"lait ribo"},
    {name:"cacao"},
    {name:"cereales"}
];

class List extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div>
                <div className="input">
                    <input type="text" placeholder="un achat"/>
                <button>+</button>
                </div>
                <div className="items-list">
                <ul>
                    {items.map((value, index) => {
                        return <li key={index}>{value.name}</li>
                    })}
                </ul>
                </div>
            </div>
        );
    }
}

export default List;
