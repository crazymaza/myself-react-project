import React, {Component} from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
	render() {
		return (
			<div className="input-group search-group">
				<input type="text" className="form-control" placeholder="Start searching..."
				       aria-label="seach-panel" aria-describedby="button-addon4" id={'search-input'}/>
				<div className="input-group-append" id="button-addon4">
					<button className="btn btn-outline-secondary" type="button">Search</button>
				</div>
			</div>
		);
	}
}

export default SearchPanel;