// interface GreetProps {
//   name: string;
//   message: number;
// }

type GreetProps = {
  name: string;
  message: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? ` welcome ${props.name}! you have ${props.message} unread message`
          : "Welcome Guest"}
      </h2>
    </div>
  );
}
