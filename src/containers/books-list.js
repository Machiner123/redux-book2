import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BooksList extends Component {
  renderList(){
    return this.props.books.map(book => {
        return (
          <li
            className="list-group-item"
            onClick={()=>this.props.selectBook(book)}
            key={book.title}>
              {book.title}
          </li>
        )
      })
    }

  render(){
    return(
      <ul className="list-group col-sm-4">{this.renderList()}</ul>
    )
  }
}

function mapStateToProps(state){
  return{
    books:state.books
  }
}

function mapDispatchToProps(dispatch){
  //bAC passes the result of callng selectBook to all reducers
  return bindActionCreators({selectBook:selectBook},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
