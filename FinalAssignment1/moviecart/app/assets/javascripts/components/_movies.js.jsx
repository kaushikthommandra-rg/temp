class Movies extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var movie = this.props.movies.map((movie) => {
      var imgLink = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`
      var moviePath = `/movies/${movie.movie_id}`
      return(
        <tr key={movie.movie_id}>
          <td><img src={imgLink} /></td>
  				<td>
  					<a href={moviePath}><strong>{movie.title}</strong></a> <br/>
  					{movie.overview}
  				</td>
  				<td><button>Add to cart</button></td>
        </tr>
      )
    })
    return(
      <table>
        <tbody>
          {movie}
        </tbody>
      </table>
    )
  }
}
