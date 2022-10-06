import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

const Course = function (props) {
  const { course } = props;

  return (
    <div class="App-header">
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map((el) => el["exercises"])} />
    </div>
  );
};

export { Course };
