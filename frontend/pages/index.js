import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import { fetchAPI } from "../api/strapi_api";
// import Seo from "../components/seo";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div >
        <div >
          <h1>{homepage.attributes?.hero?.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;

// export default function Home() {
//   return (
//     <div className="d-flex 
// justify-content-center align-items-center">
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//       >
//         Launch demo modal
//       </button>

//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">...</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }