import axios from "axios";

export const submitContact = async (formData) =>
  await axios.post("/api/contact", {
    ...formData,
  });
