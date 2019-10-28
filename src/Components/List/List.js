import React from 'react';


class List extends React.Component {
	constructor() {
		super();
		this.state = {
			items:[
        {name:"lait ribo"}
      ],
      input:""
		}
	}
	addItem(){
		this.state.items.push({name:this.state.input});
		const newItems = this.state.items;
		this.setState({ items: newItems });
  }
  onTextChange = (event)=>{
    const value = event.target.value;
    this.setState({input:value});
  }

	render () {
		return (
			<div>
				<div className="input">
					<input type="text" value={this.state.input} onChange={this.onTextChange} placeholder="un achat"/>
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
