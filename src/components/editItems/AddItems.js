import React, {Component} from 'react';

class AddItems extends Component {

    state = {
        name: '',
        age: '',
        errmsg: ''
    }

    handleChange = (e) => {
        this.setState({
        [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value !== '' && e.target.age.value !== '' ) {
            this.props.addItem(this.state)
            this.setState({
                name:'',
                age:'',
                errmsg:''
            })
        } else {
            this.setState({
                errmsg: 'Please enter name and age'
            })
        }
    }

    /**
     * id = name, age w ba5odhom f array e.target.id
     */

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type='text' placeholder='Enter name....' id='name' onChange={this.handleChange} value={this.state.name} />
                    <input type='number' placeholder='Enter age...' id='age' onChange={this.handleChange} value={this.state.age}/>
                    <input type='submit' value='Add Item' />
                </form>
                <h3>{this.state.errmsg}</h3>
            </div>
        )
    }
}


export default AddItems