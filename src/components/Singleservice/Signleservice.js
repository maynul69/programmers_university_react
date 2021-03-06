import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";

const Signleservice = (props) => {
    const { title, cost, duration, img } = props.service;
    
    return (
      <div className="col-md-4 mb-4">
        <Card className="h-400" style={{ minHeight: "400px" }}>
          <Card.Img
            variant="top"
            src={img}
            className="img-fluid"
            style={{ height: "50%", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Price: <b>{cost}</b>
              <br />
              Duration: {duration}
            </Card.Text>
            <Button
              variant="primary"
              style={{
                color: "white",
                backgroundColor: "blueviolet",
                border: "none",
              }}
            >
              Enroll
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Signleservice;