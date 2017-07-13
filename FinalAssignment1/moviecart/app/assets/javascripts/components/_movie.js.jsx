class Movie extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    alert('added to cart')
  }
  render() {
    var imgLink = `http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`
    return (
      <div>
        <h1>{this.props.movie.title}</h1><button onClick={this.handleClick}>Add to cart</button><br/>
        <img src={imgLink} />
        <p>{this.props.movie.overview}</p>
        <p>Release Date: {this.props.movie.release_date}</p>
        <p>Rating : {this.props.movie.vote_average}</p>
      </div>
    )
  }
}
