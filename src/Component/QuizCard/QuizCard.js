import { Topic, Wrapper, MetaWrapper, Text, Button } from "./QuizCard.styled";

const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <Wrapper level={level}>
      <Topic>{topic}</Topic>
      <MetaWrapper>
        <Text>
          <b>Level:</b> {level}
        </Text>
        <Text>
          <b>Time:</b> {time}
        </Text>
        <Text>
          <b>Questions:</b> {questions}
        </Text>
      </MetaWrapper>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </Wrapper>
  );
};

export default QuizCard;
