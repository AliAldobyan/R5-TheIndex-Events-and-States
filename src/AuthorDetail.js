import React from "react";

const AuthorDetail = (props) => {
  const authorBooks = props.currentAuthor.books.map((book) => (
    <tr>
      <td>{book.title}</td>
      <td>
        {props.currentAuthor.first_name} {props.currentAuthor.last_name}
      </td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  ));
  return (
    <div className="author col-xs-10">
      <div>
        <h3>
          {props.currentAuthor.first_name} {props.currentAuthor.last_name}
        </h3>
        <img
          src={props.currentAuthor.imageUrl}
          className="img-thumbnail"
          alt=""
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{authorBooks}</tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;
