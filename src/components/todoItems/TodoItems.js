import React from 'react';

const TodoItems = (props) => {
    
    const {itemsSt, deleteItem} = props;
    const len = itemsSt.length;
    const listItems = len ? ( itemsSt.map(item => {
        return (
            <div key={item.id}>
                <span className='name'>{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className='action icon' onClick={ () => deleteItem(item.id)}><strong>&times;</strong></span>
            </div>
        )
    }) 
    ) : ( <h3>No Item To Show</h3> )

    return(
        <div className='ListItems'>
            <div>
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>
            </div>
            {listItems}
        </div>
    )
}


export default TodoItems