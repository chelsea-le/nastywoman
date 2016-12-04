// Tump Twitter Feed component
import React from 'react';
import $ from 'jquery'
import 'materialize-css'
import '../node_modules/font-awesome/css/font-awesome.css'

var SortFilter = React.createClass({
	render:function() {
		return (
           	<div>	
           		<h5>Sort By:</h5>

                <p>
                    <input name="group1" type="radio" id="date" defaultChecked onClick={this.props.clickEvent} name="group1" />
                    <label htmlFor="date">Most Recent</label>
                </p>
                <p>
                    <input name="group1" type="radio" id="likes" onClick={this.props.clickEvent} name="group1" />
                    <label htmlFor="likes">Likes</label>
                </p>
                <p>
                    <input name="group1" type="radio" id="comments" onClick={this.props.clickEvent} name="group1" />
                    <label htmlFor="comments">Number of Comments</label>
                </p>
				
				{/*skeleton of dropdown  */}
           		<a className='dropdown-button btn' href='#' data-activates='dropdown1'>Sort Messages</a>

				<ul id='dropdown1' className='dropdown-content'>
					<li><a href="#!">date</a></li>
					<li><a href="#!">likes</a></li>
					<li className="divider"></li>
					<li><a href="#!">comments</a></li>
				</ul>

			</div>	
		)
	}
});

export default SortFilter; 
