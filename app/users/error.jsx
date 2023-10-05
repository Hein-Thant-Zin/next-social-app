'use client';
export default function Error({error,reset}) {
  return (
    <div className="mt-4 text-center">
          <p>Error!</p>
            <button onClick={()=>reset()}>Try again!!</button>
    </div>
  )
}
