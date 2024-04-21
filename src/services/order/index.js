import Cookies from "js-cookie";

export const createNewOrder = async (formData) => {
  try {
    const res = await fetch("/api/Order/create-order", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllOrdersForUser = async (id) => {
  try {
    const res = await fetch(`/api/Order/get-all-orders?id=${id}`, {
      method: "GET",
      mode: 'no-cors',
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getOrderDetails = async (id) => {
  try {
    const res = await fetch(`/api/Order/order-details?id=${id}`, {
      method: "GET",
      mode: 'no-cors',

      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllOrdersForAllUsers = async () => {
  try {
    const res = await fetch(`/api/admin/orders/get-all-orders`, {
      method: "GET",
      mode: 'no-cors',

      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateStatusOfOrder = async (formData) => {
  try {
    const res = await fetch(`/api/admin/orders/update-order`, {
      method: "PUT",
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};