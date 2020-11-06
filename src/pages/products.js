import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Products from "../components/Products";

const products = ({ data, pageContext }) => {
  const products = data.products.nodes;
  console.log(products);
  return (
    <Layout>
      <Products products={products} title="products">
        {products}
      </Products>
    </Layout>
  );
};

export const query = graphql`
  {
    products: allStrapiProducts {
      nodes {
        name
        media {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default products;
