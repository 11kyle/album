import React from 'react';

const Thumbnail = (props) => {
  const thumbnails = props.thumbnails.map((thumbnail, index) => {
    return (
      <div className="col-md-4" key={index}>
        <div className="card mb-4 shadow-sm">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={thumbnail.image} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"/><text fill="#eceeef" dy=".3em" x="50%" y="50%">Thumbnail</text></svg>
          <div className="card-body">
            <p className="card-text">{thumbnail.cardText}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="row">{thumbnails}</div>
  );
}

export default Thumbnail;
