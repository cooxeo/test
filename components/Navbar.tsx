import Link from "next/link";
import NavItems from "@/constants";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <section className="flex justify-between items-center mx-auto w-full p-4 ">
      <Logo />
      <div className="text-white items-center flex text-end font-medium text-lg">
        {NavItems.map((items, index) => (
          <Link key={index} href={items.src}>
            <div className="flex gap-x-2">{items.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Navbar;
