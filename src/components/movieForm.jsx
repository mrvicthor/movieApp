import React from "react";
// import { withRouter } from "react-router-dom";

const MovieForm = ({ match, history }) => {
  return (
    <>
      <h1>Movie Form - {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </>
  );
};

export default MovieForm;
