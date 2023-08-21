// const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF'
// const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF`;
const POST_URL = `https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/posts`;

//get all post
export async function fetchAllPosts() {
  try {
    const response = await fetch(`${POST_URL}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// //looking into one post
// export async function fetchSinglePost(id) {
//   try {
//     const response = await fetch(`${BASE_URL}/${id}`);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// //   export async function createItemPost(name, breed) {
// //     try {
// //       const response = await fetch(`${baseUrl}/players`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify({
// //           name,
// //           breed
// //         })
// //       });
// //       const result = await response.json();
// //       return result;
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }

// //hopfully to be able to delete
// export async function deleteItem() {
//   try {
//     const response = await fetch(`${BASE_URL}/posts/${id}`, {
//       //on request is where you want to type for deletion - find what it is
//       method: "DELETE",
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// //RENDERING!

// const renderALLPost = async (id) => {
//     try{
//         const oneitem = await fetchSinglePost (id);
//         const
//     }
// }
