import React, { Component } from 'react';
import { connect } from 'react-redux';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';





class SnackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackInput: '',
    }
  }

  handleElementChange = (event) => {
    this.setState({
      snackInput: event.target.value
    })
  }

  sendInputToRedux = () => {
    const action = { type: 'SNACK_INPUT', payload: this.state.snackInput };
    this.props.dispatch(action);
  }

  render() {
 
    return (

        <div>
          <h3>Snacks</h3>
          <input onChange={this.handleElementChange} value={this.state.snackInput} />Enter Snack
        <Button varient="raised" size="large" color="primary" onClick={this.sendInputToRedux}>Submit</Button>
        </div>



    )
  }


}

export default connect()(SnackForm);