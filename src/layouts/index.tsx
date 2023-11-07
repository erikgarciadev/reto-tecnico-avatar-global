import React from "react";
import Header from "../components/Header";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Header title={title} />
      <div className="min-h-[calc(100vh-64px)] bg-[#e9ebee]">{children}</div>
    </>
  );
}
