// Tump Twitter Feed component
import React from 'react';
import 'materialize-css'

var SortFilter = React.createClass({
	render:function() {
		return (
           	<div className="sort">
           		<h5>Sort By:</h5>
                <p>
                    <input name="group1" type="radio" id="date" defaultChecked onClick={this.props.clickEvent} />
                    <label id="sortingOptions" htmlFor="date">Most Recent</label>
                </p>
                <p>
                    <input name="group1" type="radio" id="likes" onClick={this.props.clickEvent} />
                    <label id="sortingOptions" htmlFor="likes">Likes</label>
                </p>
                <p>
                    <input name="group1" type="radio" id="comments" onClick={this.props.clickEvent} />
                    <label id="sortingOptions" htmlFor="comments">Number of Comments</label>
                </p>
			</div>
		)
	}
});

export default SortFilter;
