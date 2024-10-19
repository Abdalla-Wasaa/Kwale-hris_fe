import React from "react";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Layout from "../../component/home-two/Layout";
import InnerWrapper from "../../component/home-three/InnerWrapper";
import useMenu from "../../hooks/useMenu";
import Wrapper from "../../component/settings/Wrapper";
import Applications from "../hris-pages/applications";


function ApplicationsPage() {
  useMenu();
  return (
    <Layout>
    <BreadCrumb title="Applications" link="/applications" />
    <Wrapper>
    <div className="row">
      <InnerWrapper>
        <Applications/>
      </InnerWrapper>
    </div>
    </Wrapper>
  </Layout>
  );
}

export default ApplicationsPage;