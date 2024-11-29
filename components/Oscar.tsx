import { oscarProps } from "@/constants/props.types";

const Oscar = (props: oscarProps) => {
  return <div>{props.children}</div>;
};
export default Oscar;
