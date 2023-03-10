import { Card, Grid, Text, Button, Row, Col } from "@nextui-org/react";

const WorkoutCard = ({ stat }) => {
  return (
    <div className="workout-card">
         <Card isHoverable variant="flat" css={{ mw: "450px" }}>
            <Card.Header>
            <Text b>{stat.workout_type}</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
                <Text>
            You worked out for {stat.length} on {stat.day}
            </Text>
            </Card.Body>
            </Card>
    </div>
  );
};

export default WorkoutCard;
