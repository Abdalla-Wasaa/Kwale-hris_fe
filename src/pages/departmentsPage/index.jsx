import React from "react";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Layout from "../../component/home-two/Layout";
import InnerWrapper from "../../component/home-three/InnerWrapper";
import useMenu from "../../hooks/useMenu";
import Wrapper from "../../component/settings/Wrapper";
import Departments from "../hris-pages/departments";

function DepartmentsPage() {
  useMenu();
  return (
    <Layout>
    <BreadCrumb title="Departments" link="/departments" />
    <Wrapper>
    <div className="row">
      <InnerWrapper>
        <Departments />
      </InnerWrapper>
    </div>
    </Wrapper>
  </Layout>
  );
}

export default DepartmentsPage;