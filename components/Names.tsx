interface nameList {
  names: {
    first: string;
    last: string;
  }[];
}

const Names = (props: nameList) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div key={name.first}>
            {name.first} {name.last}
          </div>
        );
      })}
    </div>
  );
};
export default Names;
