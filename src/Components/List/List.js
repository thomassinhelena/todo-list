import React from 'react';


class List extends React.Component {
	constructor() {
		super();
		this.state = {
			items:[
				{name:"lait ribo"}
			]
		}
	}
	addItem(){
		this.state.items.push({name:"lait"});
		const newItems = this.state.items;
		this.setState({ items: newItems });
	}

	render () {
		return (
			<div>
				<div className="input">
					<input type="text" placeholder="un achat"/>
					<button onClick={() => this.addItem()}>+</button>
				</div>
				<div className="items-list">
					<ul>
						{this.state.items.map((value, index) => {
							return <li key={index}>{value.name}</li>
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default List;
