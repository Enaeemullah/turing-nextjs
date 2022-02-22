import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function custom404() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='error-template'>
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className='error-details'>
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className='error-actions'>
                <Link href='/' passHref>
                  <Button className='btn btn-primary btn-lg'>
                    {' '}
                    Take Me Home
                    <span className='glyphicon glyphicon-home'></span>{' '}
                  </Button>
                </Link>
                <Link href='/' passHref>
                  <Button className='btn btn-default btn-lg'>
                    <span className='glyphicon glyphicon-envelope'></span>{' '}
                    Contact Support{' '}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default custom404;
