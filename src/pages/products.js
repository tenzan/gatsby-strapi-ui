import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/Layout";
import Products from "../components/Products";

export default function products({ data: { products } }) {
  console.log(products);
  return (
    <Layout>
      <div>
        <ul>
          {products.nodes.map(product => (
            <li key={product.id}>
              {product.name}
              <Image fluid={product.media.childImageSharp.fluid} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    products: allStrapiProducts {
      nodes {
        id
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
