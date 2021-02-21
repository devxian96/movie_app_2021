import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({ movies, isLoading: false });
    /*
      .then((res) => {
        this.setState({ isLoading: false, movies: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
      */
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
