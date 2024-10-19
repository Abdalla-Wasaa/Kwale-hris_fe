import React from "react";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Layout from "../../component/home-two/Layout";
import InnerWrapper from "../../component/home-three/InnerWrapper";
import useMenu from "../../hooks/useMenu";
import Wrapper from "../../component/settings/Wrapper";
import Departments from "../hris-pages/departments";
import ApprovedRetirementList from "../hris-pages/approvedRetirementlList";

function ApprovedRetirementPage() {
  useMenu();
  return (
    <Layout>
    <BreadCrumb title="Approved Retirement_List" link="/approvedRetirementList" />
    <Wrapper>
    <div className="row">
      <InnerWrapper>
        <ApprovedRetirementList />
      </InnerWrapper>
    </div>
    </Wrapper>
  </Layout>
  );
}

export default ApprovedRetirementPage;