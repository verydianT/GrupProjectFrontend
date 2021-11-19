import Card from "react-bootstrap/Card";
import { useCount } from "../context/wishlistContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export default function CardLocs({ nameLoc, loc }) {
    const count = useCount();

    return (
        <Card style={{
            margin: '0',
            border: '1px solid grey',
            borderRadius: '0.1em',
            margin: '0.5em 1em'}}>
            <Card.Body>
                        <Card.Subtitle style={{
                            fontSize: '1.25em'
                        }}>{nameLoc}</Card.Subtitle>
                        <Card.Text>
                            {loc}
                        </Card.Text>
                        <Button onClick={() => count.dispatch({ type: "increment" })} variant="primary">
          Add To Wishlist
        </Button>
            </Card.Body>
        </Card>
    );
  }