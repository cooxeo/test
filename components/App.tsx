import { Greet, Person, Names, Oscar, Heading, Status } from "./index";

const personName = {
  first: "Bruce",
  last: "Wyane",
};

const nameList = [
  {
    first: "Bruce",
    last: "wayne",
  },
  {
    first: "zolo",
    last: "coox",
  },
  {
    first: "cooxeo",
    last: "scoox",
  },
  {
    first: "mai",
    last: "montez",
  },
];

const App = () => {
  return (
    <div>
      <Greet name="vishal" message={20} isLoggedIn={true} />
      <Person name={personName} />
      <Names names={nameList} />
      <Status status="loading" />
      <Heading>Heading Props</Heading>
      <Oscar>
        <Heading>This is a Heading Prop with oscar</Heading>
      </Oscar>
    </div>
  );
};

export default App;
