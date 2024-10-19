import React from "react";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Layout from "../../component/home-two/Layout";
import InnerWrapper from "../../component/home-three/InnerWrapper";
import useMenu from "../../hooks/useMenu";
import Wrapper from "../../component/settings/Wrapper";
import EditSelectionPage from "../hris-pages/selectEditpages";

function SelectEditPage() {
  useMenu();
  return (
    <Layout>
    <BreadCrumb title="Employee Edit Page" link="/selectEdit/:id" />
    <Wrapper>
    <div className="row">
      <InnerWrapper>
        <EditSelectionPage />
      </InnerWrapper>
    </div>
    </Wrapper>
  </Layout>
  );
}

export default SelectEditPage;