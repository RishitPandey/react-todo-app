import React from 'react'
import ReactDOM from 'react-dom'
import Option from './Option'

const Options =  (props) => {
    return (
      <div>
      <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
        <button 
        className="button button--link"
        onClick={props.handleDeleteOptions}>Remove All</button>
      </div>
        {props.options.length == 0 && <p className="widget__message">Please add an options to get started</p>}
        {
          props.options.map((option, index) => <Option
          handleDeleteSingular={props.handleDeleteSingular}
           key={option}
           count={index + 1}
          optionText={option} />)
        }
      </div>
    );
}

export default Options