export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }
  const { data } = req.query;

  try {
    const response = await fetch(
      `https://3aa3yts4zj.execute-api.us-east-1.amazonaws.com/dev/admin/business/assigntouser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }
    );

    const dataResponse = await response.json();
    res.status(response.status).json(dataResponse);
  } catch (error) {
    res.status(500).json({ message: "Error al enviar la solicitud", error });
  }
}
