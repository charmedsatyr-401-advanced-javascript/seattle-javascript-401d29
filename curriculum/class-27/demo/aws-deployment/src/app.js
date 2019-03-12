import React from 'react';
import { connect } from 'react-redux';

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};

const Footer = () => (
  <footer>
    <h1>This is my Footer</h1>
  </footer>
);

class Main extends React.Component {
  constructor(props) {
    super(props);
    let params = new URL(document.location).searchParams;
    this.state = {
      words: params.get('words') || "testing",
      clicks: 0,
    };
  }

  handleWordClick = e => {
    e.preventDefault();
    let words = this.state.words
      .split('')
      .reverse()
      .join('');
    let clicks = this.state.clicks + 1;
    this.setState({ words, clicks });
  };

  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
        <h4>{this.state.clicks}</h4>
        <button onClick={this.handleWordClick}>Click Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>{this.props.app.title}</div>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(mapStateToProps)(App);
