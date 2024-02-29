import React from 'react';
import { useRouteError } from "react-router-dom";
import BackButton from '../components/button/BackButton';

interface MyError {
  message: string;
}

export default function ErrorPage() {
  const error: MyError | null = useRouteError() as MyError;
  console.error(error);

  return (
    <>
    <BackButton url='/'>Voltar</BackButton>
      <div className=''>
        <h1>Oops!</h1>
        <p>This page does not exist.</p>
        {error && (
          <p>
            <i>{error.message}</i>
          </p>
        )}
      </div>
    </>
  );
}
