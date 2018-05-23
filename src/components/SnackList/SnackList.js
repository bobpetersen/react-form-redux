import React, { Component } from 'react';
import { connect } from 'react-redux'
// import CssBaseline from '@material-ui/core/CssBaseline';




const mapReduxStateToProps = (reduxState) => (
	{ reduxState }
);

class SnackList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h4>The Legendary Kochab Snack Table ({this.props.reduxState.snackReducer.length})</h4>
        
				<ul>
					{
					this.props.reduxState.snackReducer.map((snack, i) => <li key={i}>
							{snack}
						</li>)
				}
				</ul>
				{/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
			</div>
		)
	}
}





export default connect(mapReduxStateToProps)(SnackList);