import { FC } from "react";

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <header className="bg-[#2e5d86] h-16">
      <nav className="max-w-7xl px-4 mx-auto  h-full flex items-center">
        <h1 className="text-white font-bold text-2xl">{title}</h1>
      </nav>
    </header>
  );
};

export default Header;