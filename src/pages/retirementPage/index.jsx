import React from "react";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Layout from "../../component/home-two/Layout";
import InnerWrapper from "../../component/home-three/InnerWrapper";
import useMenu from "../../hooks/useMenu";
import Wrapper from "../../component/settings/Wrapper";
import Departments from "../hris-pages/departments";
import RetirementList from "../hris-pages/retirementList";

function RetirementPage() {
  useMenu();
  return (
    <Layout>
    <BreadCrumb title="Pending Retirement_List" link="/retirementList" />
    <Wrapper>
    <div className="row">
      <InnerWrapper>
        <RetirementList />
      </InnerWrapper>
    </div>
    </Wrapper>
  </Layout>
  );
}

export default RetirementPage;