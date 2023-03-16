import React, { useState, useEffect } from 'react';


const GitTimesTamp = () => {
  const [lastCommitTime, setLastCommitTime] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/repos/Code-Knights/campus-site/commits/main")
      .then((response) => response.json())
      .then((data) => {
        const lastCommitTimestamp = data.commit.author.date;
        const date = new Date(lastCommitTimestamp);
        setLastCommitTime(
          `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        );
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {/* create date only year month date */}
      <p>
        <code style={{ marginRight: "5px" }}>
          {lastCommitTime}
        </code>
        -
        <span
          style={{
            marginLeft: "5px",
            textDecoration: "underline",
            fontStyle: "italic",
          }}>
          latest update
        </span>
      </p>
    </>
  );
};

export default GitTimesTamp;
