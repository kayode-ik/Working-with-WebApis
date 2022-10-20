import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";

const Cards = (props) => {
  const { repos } = props;

  // console.log(repos, "line 6");
  if (!repos || repos.length === 0) return <p>Sorry, No repo Available</p>;

  let newRepos = repos.news;
  return (
    <div className="listContainer">
      <ul>
        <h2 className="list-head">Bloomberg Market and Financial News API</h2>
        {newRepos.map((repo) => {
          return (
            <Card key={repo.id} className="listCard">
              <div className="cardFlex">
                <label>News Title :</label> &nbsp;
                {repo.title} <br />
                <label>News :</label> &nbsp;
                {repo.card} <br />
                <label>News Date :</label> &nbsp;
                {repo.date} <br />
                <label>News Description :</label> &nbsp;
                {repo.longURL}
              </div>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;
