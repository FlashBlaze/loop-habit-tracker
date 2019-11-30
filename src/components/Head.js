import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <div>
      <Helmet>
        <title>Loop - Habit Tracker</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Landing page for Loop - Habit Tracker"
        />
        <meta name="author" content="Neeraj Lagwankar" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
    </div>
  );
};

export default Head;
