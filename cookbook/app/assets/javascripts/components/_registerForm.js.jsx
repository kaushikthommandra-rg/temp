var RegisterForm  = React.createClass({
  getInitialState: function() {
    return { password: '', password_confirmation: ''};
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value})
  },
  handlePasswordConfirmationChange: function(e) {
    this.setState({password_confirmation: e.target.value})
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
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
      type: 'UPDATE',
      data: {user: user},
      success: function(data) {
        this.setState({data: user});
      }.bind(this),
    });
  },

  render() {
    return (
      <form className="new_my_model" onSubmit={this.handleSubmit}>
        <label>Password</label><br />
        <input type="text" className="my_model_name" placeholder="Enter the password"/><br />
        <label>Password Confirmation</label><br />
        <input type="text" className="my_model_name" placeholder="Re-enter the password"/><br />
        <input type="submit" value="Post" />
      </form>
    )
  }
});
