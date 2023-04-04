var score = 0;
var wicket = 0;
const Ballwiese = [];

function addEvenet(num) {
  Ballwiese.push(num);
  score += num;
  a.render(<App />);
  console.log(Ballwiese);
}

/**Wicket function */
function wicket1() {
  if (wicket <= 9) {
    Ballwiese.push("W");
    wicket += 1;
  }
  a.render(<App />);
  console.log(Ballwiese);
}
const ScoreButtons = () => (
  <div>
    <button onClick={() => addEvenet(0)}>0</button>
    <button onClick={() => addEvenet(1)}>1</button>
    <button onClick={() => addEvenet(2)}>2</button>
    <button onClick={() => addEvenet(3)}>3</button>
    <button onClick={() => addEvenet(4)}>4</button>
    <button onClick={() => addEvenet(5)}>5</button>
    <button onClick={() => addEvenet(6)}>6</button>
    <button onClick={wicket1}>Wicket</button>
  </div>
);
const Result = () => (
  <div>
    {Ballwiese.map((res, index) => (
      <>
        {index % 6 === 0 ? <br /> : null}
        <span key={index}>{res === 0 ? <strong>.</strong> : res}</span>
        &nbsp;&nbsp;&nbsp;
      </>
    ))}
  </div>
);
function handleSubmit(event) {
  event.preventDefault();
}
const Form = () => (
  <>
    <form onSubmit={handleSubmit}>
      <input />
      <input />
      <button>Submit</button>
    </form>
  </>
);
var App = () => (
  <>
    <hr />
    <h1>SCORE KEEPER</h1>
    <h2>
      Score: {score}/{wicket}
    </h2>
    <ScoreButtons />
    <br />
    <Result />
    <hr />
    <Form />
    <hr />
  </>
);

var a = ReactDOM.createRoot(document.getElementById("root"));
a.render(<App />);
