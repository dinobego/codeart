import customFetch from "utils/customFetch";

export async function login(payload) {
  const response = await customFetch("/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      requestBody: payload
    }),
  });

  const data = await response.json();

  return { data, response };
}

export async function logout() {
  const response = await customFetch("/user/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return { data, response };
}

export async function checkSession() {
  const response = await customFetch("/forest/employee/getEmployees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return { data, response };
}
