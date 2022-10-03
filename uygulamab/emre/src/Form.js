import React, { Component } from 'react'

 class Form extends Component {
    constructor()
    {
        super();
        this.onChange=this.onChange.bind(this);
    }
    state=
    {
        name:'',
        phone:''
    };

    onChange(e)
    {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
    }
  render() {
    return (
      <div>
        <input name='name' id='name' onChange={this.onChange} value={this.state.name} placeholder='Bir İsim Giriniz..' />
        <br/>
        <input name='phone' id='phone' onChange={this.onChange} value={this.state.phone} placeholder='Numara giriniz..' />
        <button>Ekle</button>
      </div>
    )
  }
}
export default Form;