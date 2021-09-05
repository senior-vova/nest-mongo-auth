import React from "react";
import { LinkBlank, MainWrapper } from "../components";
import { jwt, nest, mongo } from "../assets/images";

const HomePage: React.FC = () => {
  return (
    <MainWrapper>
      <div className="py-3 d-flex flex-column align-items-center text-center px-5">
        <h2>
          This library created for easy using auth system with MongoDB. Also in
          this library using JWT auth module (
          <LinkBlank
            link={"https://senior-vova.github.io/nest-jwt-module"}
            text={"Nest-Jwt-Module"}
          />
          ).
        </h2>
        <div className="w-50 d-flex justify-content-between my-3">
          <img width={100} src={nest} alt="nest" />
          <img width={100} src={jwt} alt="jwt" />
          <img width={100} src={mongo} alt="mongo" />
        </div>
      </div>
    </MainWrapper>
  );
};

export default HomePage;
