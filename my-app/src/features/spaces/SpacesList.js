import { SPACES } from '../../app/shared/SPACES';
import { Col, Row } from "reactstrap";
import SpaceCard from "./SpaceCard";

const SpacesList = () => {
  return (
    <Row className="ms-auto">
      {SPACES.map((space) => {
        return (
          <Col md="5" className="m-4" key={space.id}>
            <SpaceCard space={space} />
          </Col>
        );
      })}
    </Row>
  );
};

export default SpacesList;

