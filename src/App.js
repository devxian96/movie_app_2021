import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img width="200" height="100" src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gXqnokbikwBeNq3Mq9HYugHaDt%26pid%3DApi&f=1",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8BqQLDbDXIf4aoMKmzm8CwHaE8%26pid%3DApi&f=1",
    rating: 3.4,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ASh0UtnK8oJIry5SD8aTfwHaEK%26pid%3DApi&f=1",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FinNESATws-vUJ9tpNFNLwHaE7%26pid%3DApi&f=1",
    rating: 4.9,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(({ id, name, image, rating }) => (
        <Food name={name} picture={image} key={id} rating={rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
