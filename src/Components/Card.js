import React from "react";

class Card extends React.Component {
  render(props) {
    return (
      <article className="card">
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default Card;
