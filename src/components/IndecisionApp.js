import React from 'react';
import ReactDOM from 'react-dom'
import Header from './Header'
import Action from './Action'
import AddOption from './AddOption'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteSingular = (optiontoremove) => {
    console.log(optiontoremove)
    this.setState((prevState) => ({ options: prevState.options.filter((option) => {
      return optiontoremove !== option
    }) 
  }))
  }
  
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({ selectedOption : option }))
  }
  handleAddOption = (option) => {
    if(!option) return 'Enter valid value to add item'
    else if(this.state.options.indexOf(option)>-1) {
      return 'This option already exists in the list'
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option])}))
  }

  handleOptionModal = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if(options)
        this.setState(() => ({ options: options}))
    } catch(error) {}
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      console.log('saving data')
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }


  render() {
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <div className="widget">
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingular={this.handleDeleteSingular}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        </div>
        </div>
        <OptionModal 
        selectedOption={this.state.selectedOption}
        handleOptionModal={this.handleOptionModal} />
      </div>
    );
  }
}