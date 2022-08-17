import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const SpaceCard = (props) => {
  return (
    <Card>
      <CardImg
        width="100%"
        src={props.space.image}
        alt={props.space.name}
      />
      <CardImgOverlay>
        <CardTitle>{props.space.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};
export default SpaceCard;
