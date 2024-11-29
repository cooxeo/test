interface statusProps {
  status: "loading" | "success" | "error";
}

const Status = (props: statusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "success";
  } else if (props.status === "error") {
    message = "Error";
  }

  return (
    <div>
      <h2>status - {message}</h2>
    </div>
  );
};
export default Status;
