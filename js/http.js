/*
 * Easy Http Library
 * @author Fattylee
 * @version 1.0.0
 * */

class EasyHttp {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async post(url, payload) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        body: JSON.stringify(payload),
      },
    });
    const data = await response.json();
    return data;
  }
  async put(url, payload) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        body: JSON.stringify(payload),
      },
    });
    const data = await response.json();
    return data;
  }
  async delete(url) {
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = "Resource deleted..";
    return data;
  }
}

export const http = new EasyHttp();

