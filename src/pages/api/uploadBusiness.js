// pages/api/send-notifications.js
import { API_BASE_URL } from '@/constants/api'
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { file } = req.body;

  try {
    const response = await fetch(
      `${API_BASE_URL}/admin/dashboard/upload?file=${file}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file }),
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al enviar la solicitud", error });
  }
}
