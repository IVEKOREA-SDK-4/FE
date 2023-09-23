import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import styled from "styled-components";

const MainPage = () => {

    const signUpHandler = () => {

    }







    return (
        <>
            <Header/>
             <Layout>
                <CenteredButtonsContainer>
                <StBtn name='zz' onClick={() => {}}>
                회원가입
                </StBtn>
                <StBtn name='zz' onClick={() => {}}>
                로그인
                </StBtn>
                <StBtn name='zz' onClick={() => {}}>
                광고보러 가기
                </StBtn>
                <StBtn name='zz' onClick={() => {}}>
                상점&교환
                </StBtn>
                </CenteredButtonsContainer>
            </Layout>

            
        </>
    );
};

const StBtn = styled.button`
display: inline-flex;
align-items: center;
outline: none;
border: none;
border-radius: 4px;
color: blue;
font-weight: bold;
cursor: pointer;
padding-left: 1rem;
padding-right: 1rem;
margin: 0 auto;
&:not(:first-child){
    margin-left: 1rem;
  }
`;

const CenteredButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: flex;
`;

export default MainPage;