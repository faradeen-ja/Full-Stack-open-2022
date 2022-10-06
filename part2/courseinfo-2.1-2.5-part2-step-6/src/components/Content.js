import { Part } from "./Part";

const Content = function (props) {

  return (
    <div>

      {props.parts.map((Element) => (
        <Part key={Element.id} part={Element} />

      ))}

    </div>
  );
};

export { Content };
