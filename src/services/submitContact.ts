import axios from "axios";

export const submitContact = async (formData) =>
  await axios.post("https://api.web3forms.com/submit", {
    ...formData,
  });
