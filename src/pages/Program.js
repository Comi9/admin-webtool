import React from 'react'

function Program() {
	return (
		<>
			<h2>Program</h2>

			<form className="uk-form-stacked">

				<div className="uk-margin">
					<label className="uk-form-label" htmlFor="form-stacked-text">Text</label>
					<div className="uk-form-controls">
						<input className="uk-input" id="form-stacked-text" type="text" placeholder="Some text..." />
					</div>
				</div>

				<div className="uk-margin">
					<label className="uk-form-label" htmlFor="form-stacked-text">Text</label>
					<div className="uk-form-controls">
						<input className="uk-input uk-form-danger" id="form-stacked-text" type="text" placeholder="Some text..." />
					</div>
				</div>

				<div className="uk-margin">
					<label className="uk-form-label" htmlFor="form-stacked-select">Select</label>
					<div className="uk-form-controls">
						<select className="uk-select" id="form-stacked-select">
							<option>Option 01</option>
							<option>Option 02</option>
						</select>
					</div>
				</div>

				<div className="uk-margin">
					<div className="uk-form-label">Radio</div>
					<div className="uk-form-controls">
						<label><input className="uk-radio" type="radio" name="radio1" /> Option 01</label>
						<label><input className="uk-radio" type="radio" name="radio1" /> Option 02</label>
					</div>
				</div>

			</form>
		</>
	)
}

export default Program
