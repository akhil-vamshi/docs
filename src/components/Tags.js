import React from 'react';

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        (tag && tag.name) ? (
          <React.Fragment key={index}>
            {(
              <span className={`plantag ${tag.additionalClass}`}>
                {tag.name}
              </span>
            )}
          </React.Fragment>
        ) : null
      ))}
    </div>
  );
}

export default Tags;