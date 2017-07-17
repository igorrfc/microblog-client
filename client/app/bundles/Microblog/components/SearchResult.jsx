import React from 'react';

const SearchResult = ({ user }) => (
  <div className={`search-result`}>
    <div className={`col-md-12 col-xs-12`}>
      <div className={`col-md-4 col-xs-4`}>
        <span className="picture glyphicon glyphicon-user"></span>
      </div>
      <div className={`details col-md-4 col-xs-4`}>
        <span className={`font-default bold`}>{user.name}</span>
        <p className={`font-tiny font-mid-grey`}>@{user.nickname}</p>
      </div>
      <div className={`col-md-2 col-xs-2`}>
        <button type={`button`} className={`btn`}>
          <span className={`glyphicon glyphicon-plus font-default`}></span>
        </button>
      </div>
    </div>
  </div>
);

export default SearchResult;
