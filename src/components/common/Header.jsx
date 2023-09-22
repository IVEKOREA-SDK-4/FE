import React, { useState } from "react";
import Layout from "./Layout";
import styled from "styled-components";
import logo from "../../assets/img/zogaklogo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
//   const isLogin = useSelector((state) => state.user.isLogin);
  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <StHeader>
      <Layout>
        <StHeaderCont>
          <img src={logo} alt="" onClick={onClickHandler} />
          <div>
            {/* {isLogin ? (
              <StDiv>
                {"zz"}
              </StDiv>
            ) : (
                null
            )} */}
          </div>
        </StHeaderCont>
      </Layout>
    </StHeader>
  );
};

const StHeader = styled.div`
  width: 100%;
`;

const StHeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  padding: 30px 0px;
  position: relative;
  img {
    width: 15%;
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  div {
    display: flex;
  }
`;

const StDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default Header;