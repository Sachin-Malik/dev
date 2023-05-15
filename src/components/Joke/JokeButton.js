function JokeButton({ setShowJoke }) {
  return (
    <div className=" justify-content-center row">
      <div className="col-10 col-md-4 text-center">
        <button className="btn btn-dark" onClick={() => setShowJoke(true)}>a Dev Joke</button>
      </div>
    </div>
  )
}
export default JokeButton