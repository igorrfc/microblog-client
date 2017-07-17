import React from 'react';

import SearchResult from './SearchResult';

const SearchResults = (props) => {
  const { users: { list, searchedUsersList, searching } } = props;

  let listCollection = list;

  if (searching) {
    listCollection = searchedUsersList;
  }

  if (listCollection.length == 0) {
    return(
      <p>No users found</p>
    )
  };

  return (
    <div className={`search-results`}>
      { listCollection.map((user, key) => (<SearchResult user={user} key={key} />)) }
    </div>
  );
};

export default SearchResults;
