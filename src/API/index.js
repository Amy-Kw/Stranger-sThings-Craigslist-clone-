// const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF'
// const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF";
const POST_URL =
  "https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/posts";

//fetch all

// const response = fetch("https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/posts")
// //transform into json for use
// // const result = response.json()

// // const returned = await fetch(`${BASE_URL}/posts`)

export async function fetchAllPost() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//   export async function createItemPost(name, breed) {
//     try {
//       const response = await fetch(`${baseUrl}/players`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           name,
//           breed
//         })
//       });
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       console.error(error);
//     }
//   }

export async function deleteItem() {
  try {
    const response = await fetch(`${baseUrl}/posts/${id}`, {
      //on request is where you want to type for deletion - find what it is
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
