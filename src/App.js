import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  

  submitForm = e => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    fetch(url, config)
    .then(res => res.json())
    .then(res => {
    if (res.error) {
      alert(res.error);
    } else {
      console.log("ok")
      alert(`Film envoyé !`);
    }
  }).catch(e => {
    console.error(e);
    alert(`Erreur lors de l'ajout d'un film`);
  });
  }
  
  

render() {
  return (
    <div className="App">
        <h1>Saisi d'un film</h1>

<form onSubmit={this.submitForm}>
  <fieldset>
    <legend>Informations</legend>
    <div className="form-data">
      <label htmlFor="title">Titre</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={this.onChange}
        value={this.state.title}
        required
      />
    </div>

    <div className="form-data">
      <label htmlFor="poster">Poster</label>
      <input
        type="url"
        id="poster"
        name="poster"
        onChange={this.onChange}
        value={this.state.poster}
        required
      />
    </div>

    <div className="form-data">
      <label htmlFor="comment">commentaire</label>
      <input
        type="textarea"
        id="comment"
        name="comment"
        onChange={this.onChange}
        value={this.state.comment}
        required
      />
    </div>
    <hr />
    <div className="form-data">
      <input type="submit" value="Envoyer" />
    </div>
  </fieldset>
</form>
    </div>
  );
}
}

export default App;
