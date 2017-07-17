import React, { Component } from 'react';
import axios from 'axios';

import SearchResults from './SearchResults';

class SearchUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { typing: false, query: '' };
  }

  componentWillMount() {
    const { setUsersList } = this.props;

    axios.get('/users').then(({ data: response }) => setUsersList(response.data))
  }

  componentDidUpdate(prevProps, prevState) {
    const { typing: previousTyping, query: previousQuery } = prevState;
    const { typing, query } = this.state;

    const { finishesUserSearching } = this.props;

    if (previousTyping && !typing) {
      const { setSearchedUsersList } = this.props;

      axios.get('users/search?query=' + this.state.query).then(({ data: response }) => {
        setSearchedUsersList(response.data);
      });
    }

    if (previousQuery !== '' && query === '') {
      finishesUserSearching();
    }
  }

  stopTyping() {
    this.setState({
      typing: false,
    });
  }

  startTyping(event) {
    const { startUserSearching } = this.props;

    startUserSearching();

    this.setState({
      typing: true,
      query: event.target.value,
    });

    setTimeout(this.stopTyping.bind(this), 1000);
  }

  render() {
    return (
      <div className={`block-component search-users`}>
        <div className={`col-md-12 col-xs-12`}>
          <input
            id={`search`}
            name={`search`}
            type={`text`}
            placeholder={`Search for:`}
            className={`form-control`}
            onChange={this.startTyping.bind(this)}
          />
        </div>

        <div className={`col-md-12 col-xs-12 marg-top-10`}>
          <SearchResults {...this.props}/>
        </div>
      </div>
    )
  }
}

export default SearchUsers;
