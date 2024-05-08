import customFetch from "utils/customFetch";

export async function login(username, password) {
  try {
    const response = await customFetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    console.log(data, response);
  } catch (e) {
    console.log(e);
  }

  return {};
}
