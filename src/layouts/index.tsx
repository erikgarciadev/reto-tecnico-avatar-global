import React from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { PageState } from "../interfaces/util";
import Error from "../components/Error";

interface Props {
  children: React.ReactNode;
  title: string;
  pageState: PageState;
}

export default function Layout({ children, title, pageState }: Props) {
  const getContent = () => {
    switch (pageState) {
      case PageState.LOADING:
        return <Loader />;
      case PageState.ERROR:
        return <Error />;

      default:
        return children;
    }
  };
  return (
    <>
      <Header title={title} />
      <div className="min-h-[calc(100vh-64px)] bg-[#e9ebee]">
        {getContent()}
      </div>
    </>
  );
}
