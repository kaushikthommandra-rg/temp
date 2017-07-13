var SignupForm  = React.createClass({
  propTypes: {
    user: React.PropTypes.array
  },
  getInitialState: function() {
    return { user_name: '', email: ''};
  },
  handleUserNameChange: function(e) {
    this.setState({user_name: e.target.value})
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value})
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.user_name.trim();
    var email = this.state.email.trim();
    if(!name || !email) {
      return
    }
    this.setState({ user_name: '', email: '' });

    var user = {user: this.state.user}
    this.setState({data: user});
    $.ajax({
      url: 'sign_up',
      dataType: 'json',
      type: 'POST',
      data: {user: user},
      success: function(data) {
        this.setState({data: user});
      }.bind(this),
    });
  },

  render() {
    return (
      <form className="new_my_model" onSubmit={this.handleSubmit}>
        <label>User Name</label><br />
        <input type="text" className="my_model_name" placeholder="Enter the user name" value={ this.state.user_name} onChange={ this.handleUserNameChange}/><br />
        <label>Email id</label><br />
        <input type="text" className="my_model_name" placeholder="Enter the Email id" value={ this.state.email} onChange={ this.handleEmailChange}/><br />
        <input type="submit" value="Post" />
      </form>
    )
  }
});
