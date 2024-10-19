import React from "react";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Layout from "../../component/home-two/Layout";
import InnerWrapper from "../../component/home-three/InnerWrapper";
import useMenu from "../../hooks/useMenu";
import Wrapper from "../../component/settings/Wrapper";
import Departments from "../hris-pages/departments";
import LeaveTypes from "../hris-pages/leaveTypes";

function LeaveTypesPage() {
  useMenu();
  return (
    <Layout>
    <BreadCrumb title="LeaveTypes" link="/leaveTypes" />
    <Wrapper>
    <div className="row">
      <InnerWrapper>
        <LeaveTypes/>
      </InnerWrapper>
    </div>
    </Wrapper>
  </Layout>
  );
}

export default LeaveTypesPage;