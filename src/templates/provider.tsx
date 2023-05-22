import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";
import "../index.css";

import HeaderSimple from "../components/HeaderSimple";
import Headline from "../components/Headline";
import HStack from "../components/HStack";
import Label from "../components/Label";

import BigButton from "../components/BigButton";
import CenteredContainer from "../components/CenteredContainer";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import ProviderTable from "../components/ProviderTable";
import Reviews from "../components/Reviews";
import StaticMap from "../components/StaticMap";
import VStack from "../components/VStack";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-provider",
    filter: { entityTypes: ["healthcareProfessional"] },
    localization: { locales: ["en"], primary: false },
    fields: [
      "name",
      "c_specialty.specialty",
      "address.city",
      "address.region",
      "headshot.url",
      "c_providerBio",
      "address.line1",
      "mainPhone",
      "slug",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function Product({ document }: TemplateProps) {
  return (
    <>
      <PageLayout backgroundColor="#FFFFFF">
        <HeaderSimple
          backgroundColor="#25559c"
          logo={`https://a.mktgcdn.com/p-sandbox/WHS91rIABx0NB_QOTNVuanMzZMAFeDZj0DeXTgrT7Go/842x190.png`}
        />
        <CenteredContainer>
          <GridContainer>
            <VStack>
              <Headline
                value={`${document.name}`}
                fontWeight="bold"
                textSize="4xl"
              />
              <Label
                value={`${document.c_specialty.specialty} in  ${document.address.city},  ${document.address.region}`}
              />
              <HStack>
                <Reviews averageRating={5} reviewCount={1995} />
              </HStack>
            </VStack>
            <ProductImage
              src={`${document.headshot.url}`}
              alt="a pair of skis"
            />
            <Paragraph
              value={`${document.c_providerBio}`}
              fontWeight="light"
              textSize="sm"
            />
            <BigButton title={`Book Appointment`} href="#" />
          </GridContainer>
          <ProviderTable
            title="Provider Details"
            address={`${document.address.line1}, ${document.address.city}, ${document.address.region}`}
            phone={`${document.mainPhone}`}
            specialty={`${document.c_specialty.specialty}`}
          />
          <StaticMap
            address={`${document.address.line1}, ${document.address.city}, ${document.address.region}`}
          />
        </CenteredContainer>
        <Footer
          paragraph={``}
          logo={`https://a.mktgcdn.com/p-sandbox/WHS91rIABx0NB_QOTNVuanMzZMAFeDZj0DeXTgrT7Go/842x190.png`}
        />
      </PageLayout>
    </>
  );
}
