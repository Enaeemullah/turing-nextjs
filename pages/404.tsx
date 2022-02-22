import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';

function custom404() {
  const router = useRouter();
  const homeHandler = (e: any) => {
    e.preventDefault();
    router.push('/');
  };
  return (
    <>
      This Page is not found.
      <Button className='btn btn-primary' onClick={homeHandler}>
        Go Back.
      </Button>
      ;
    </>
  );
}

export default custom404;
