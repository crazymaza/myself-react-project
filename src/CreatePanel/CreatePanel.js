import React, {Component} from 'react';

class CreatePanel extends Component {
	render() {
		return (
			<div>
				<div className="input-group added-group">
					<input type="text" className="form-control" placeholder="Do somethings..."
					       aria-label="added-panel" aria-describedby="button-addon4" id={'added-input'}/>
					<div className="input-group-append" id="button-addon4">
						<button className="btn btn-outline-secondary" type="button">Add</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CreatePanel;