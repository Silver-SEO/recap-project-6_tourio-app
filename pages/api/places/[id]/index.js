import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = places.find((place) => place.id === id);
    if (!place) {
      response.status(404).json({ status: "Not found" });
      return;
    }
    response.status(200).json(place);
  }
}
