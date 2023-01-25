import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const useFetcher = async ({ method = "POST", url, body }:any) => {
  const apiUrl = `${baseUrl}${url}`;
  try {
    const options:any = {
      method,
      // credentials: "include",
      headers: {
        RequestId: nanoid(),
        "Content-Type": "application/json",
        // accessToken: localStorage.getItem("accessToken"),
        // refreshToken: localStorage.getItem("refreshToken"),
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(apiUrl, options);

    return res;
  } catch (error:any) {
    toast.error(error);
    throw error;
  }
};

// export const getProfile = async ({ method = "POST", url, body }) => {
//   const apiUrl = `${baseUrl}${url}`;
//   try {
//     const options = {
//       method,
//       credentials: "include",
//       headers: {
//         RequestId: nanoid(),
//         "Content-Type": "application/json",
//         accessToken: localStorage.getItem("accessToken"),
//         refreshToken: localStorage.getItem("refreshToken"),
//       },
//     };

//     if (body) {
//       options.body = JSON.stringify(body);
//     }

//     const res = await fetch(apiUrl, options);

//     return await res.json();
//   } catch (error) {
//     toast.error(error);
//     throw error;
//   }
// };

// export const loginFetcher = async ({ method = "POST", url, body }) => {
//   const apiUrl = `${baseUrl}${url}`;
//   try {
//     const options = {
//       method,
//       // credentials: "include",
//       headers: {
//         RequestId: nanoid(),
//         "Content-Type": "application/json",
//       },
//     };

//     if (body) {
//       options.body = JSON.stringify(body);
//     }

//     // console.log("options", options);

//     const res = await fetch(apiUrl, options);
//     // for (var pair of res.headers.entries()) {
//     //   console.log(pair[0] + ": " + pair[1]);
//     // }
//     // console.log("login res", res.headers.get("accessToken"));
//     return await res.json();
//   } catch (error) {
//     toast.error(error);
//     throw error;
//   }
// };

// export const updateFetcher = async ({ method = "PUT", url, formData }) => {
//   const apiUrl = `${baseUrl}${url}`;
//   // console.log("inside uodate");
//   try {
//     const options = {
//       method,
//       body: formData,
//       // credentials: "include",
//       headers: {
//         // "Content-Type": "multipart/form-data",

//         // Accept: "multipart/form-data",
//         RequestId: nanoid(),
//       },
//     };

//     // console.log("options", options);

//     const res = await fetch(apiUrl, options);
//     // for (var pair of res.headers.entries()) {
//     //   console.log(pair[0] + ": " + pair[1]);
//     // }
//     // console.log("login res", res.headers.get("accessToken"));
//     return await res.json();
//   } catch (error) {
//     toast.error(error);
//     throw error;
//   }
// };
