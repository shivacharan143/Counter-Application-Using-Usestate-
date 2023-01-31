import { Segment, Button } from "semantic-ui-react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <center>
        <Segment compact textAlign="center" padded="very">
          <h3 style={{ fontSize: "25px" }}>Count</h3>
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "25px",
            }}
          >
            {count}
          </h4>
          <Button positive onClick={increment} floated="left">
            Increment
          </Button>
          <Button
            negative
            onClick={decrement}
            disabled={count === 0}
            floated="right"
          >
            Decrement
          </Button>
        </Segment>
        <div style={{marginTop: '4rem'}}>
          <h1>Done By Shiva Charan - 12006201</h1>
        </div>
      </center>
    </div>
  );
}

export default Counter;
