import React, {Component} from 'react'




class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(params) {
    console.log(this.state.value);
    params.preventDefault();

   this.props.onTermSubmit(this.state.value)
  }





  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default SearchBar;
