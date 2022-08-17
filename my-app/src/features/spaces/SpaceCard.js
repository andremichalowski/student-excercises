import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const SpaceCard = (props) => {
  return (
    <Card>
    <CardImgOverlay>
        <CardTitle>{props.space.name}</CardTitle>
    </CardImgOverlay >
        <div className="flex">
            <CardImg
                width="100%"
                src={props.space.image}
                alt={props.space.name}
                />
        </div>
    </Card>
  );
};
export default SpaceCard;
