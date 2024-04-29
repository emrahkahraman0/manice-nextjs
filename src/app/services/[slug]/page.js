import Page from "@/templates/Page";
import ServicesClients from "@/templates/ServicesClients";
import ServicesPricings from "@/templates/ServicesPricings";
import ServicesValue from "@/templates/ServicesValue";
import Servicesİnfo from "@/templates/Servicesİnfo";
import Servicesİtems from "@/templates/Servicesİtems";

function ServicesDetails() {
  return (
    <>
      <Page />
      <ServicesValue />
      <Servicesİnfo />
      <Servicesİtems />
      <ServicesPricings />
      <ServicesClients />
    </>
  );
}

export default ServicesDetails;
