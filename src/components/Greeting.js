import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAnyGreeting } from '../redux/features/greetings';

const Greeting = () => {
  const { error, greeting, isLoading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) dispatch(fetchAnyGreeting());
  }, []);

  return (
    <>
      {isLoading && <p>loading...</p>}

      {error && <p>Error occurred</p>}

      {greeting && (
        <div>
          <h3><i>{greeting.lang}</i></h3>
          <p>{greeting.message}</p>
        </div>
      )}
    </>
  );
};

export default Greeting;
