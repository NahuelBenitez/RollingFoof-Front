export async function getProductos() {
  const response = await fetch("http://localhost:3000/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.warn("Error al obtener los productos");
    return null;
  }

  const data = await response.json();
  return data;
}

export const getCategory = async (categoryId) => {
  try {
    const response = await fetch(`http://localhost:3000/category/${categoryId}`);
    if (!response.ok) {
      throw new Error("Error al obtener la categoría");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error al obtener la categoría");
  }
};
