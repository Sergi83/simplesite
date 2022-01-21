import React from "react";

// components
import { ClientsContent } from "../components/ClientsContent";

// layout
import { PageLayout } from "../components/layouts/PageLayout";

const Clients = () => {
  return (
    <PageLayout>
      <h2 className="header-clients" >Our Clients</h2>
      <ClientsContent/>
    </PageLayout>
  );
};

export default Clients;
