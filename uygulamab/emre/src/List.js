import React, { Component } from 'react'
import './List.css';


 class List extends Component {

  render() {
    return (
      <div className={"listArea"} >
        <input name="filter" id="filter" placeholder="Filter By Name or Phone" />
        <ul className='list' >

            {
                this.props.contact.map(con =>
                    
                    <li key={con.phone}>
                    <span className='name' > {con.name} </span>
                    <span className='phone' > {con.phone} </span>
                    <span className='clearfix' >  </span>
                 </li>


                    )
            }
            
        </ul>
      </div>
    )
  }
}
export default List;