import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { q, handleInputChange, handleFormSubmit } = this.props;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="Query">
            <strong>Book</strong>
          </label>
          <input
            className="form-control"
            id="Title"
            type="text"
            value={q}
            placeholder="Harry Potter"
            name="q"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="pull-right">
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn btn-lg btn-danger float-right"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
