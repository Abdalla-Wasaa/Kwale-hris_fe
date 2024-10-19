import React from "react";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Layout from "../../component/home-two/Layout";
import InnerWrapper from "../../component/home-three/InnerWrapper";
import useMenu from "../../hooks/useMenu";
import Wrapper from "../../component/settings/Wrapper";
import Employees from "../hris-pages/employees";

function EmployeesPage() {
  useMenu();
  return (
    <Layout>
    <BreadCrumb title="Employees" link="/employees" />
    <Wrapper>
    <div className="row">
      <InnerWrapper>
        <Employees />
      </InnerWrapper>
    </div>
    </Wrapper>
  </Layout>
  );
}

export default EmployeesPage;