import { useRouteError } from "react-router-dom";

interface MyError {
    message: string;
} 

export default function ErrorPage() {
  const error: MyError | null = useRouteError() as MyError;
  console.error(error);

  return (
    <div className=''>
      <h1>Oops!</h1>
      <p>This page does not exist.</p>
      {error && (
        <p>
          <i>{error.message}</i>
        </p>
      )}
    </div>
  );
}
