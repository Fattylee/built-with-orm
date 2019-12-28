/* eslint-disable react/react-in-jsx-scope  */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    const url = 'http://localhost:4000/api/v1/products';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
        console.log(data);
      })
      .catch((err) => {
        console.log('Error:', err.message);
      });
  }

  render() {
    const { products } = this.state;
    const list = (
      <ul>
        {/* eslint-disable-next-line */}
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    );
    return (
      <div>
        <h1>Hello React world</h1>
        {products[0] && products[0].name}
        {list}
        <hr />
        <ul>
          <li>
            <a href="facebook">Facebook</a>
          </li>
          <li>
            <a href="google">Google</a>
          </li>
          <li>
            <a href="twitter">Twitter</a>
          </li>
          <li>
            <a href="instagram">Instagram</a>
          </li>
        </ul>
        <hr />
        <h2>Walhamdulllilaahi rabi l alamin</h2>
        <ul>
          <li>
            1. Learn in Flow - Mental state when you are energized and have
            focus with full involvement and enjoyment
          </li>
          <li>2. Just Start - Screw it lets do it, you might be successful</li>
          <li>3. Rule of 2/3 - Spend 1/3 studying and 2/3 applying</li>
          <li>4. The Sweet Spot - Challenging our selves 60-80% of the time</li>
          <li>
            5. Commitment - Put in the time and continuously sharpen you skills
          </li>
          <li>
            6. Find a Mentor - Can guild you along the path of mastery and can
            help you see the success of it
          </li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#fake'));
