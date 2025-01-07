export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email required" });
  }

  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    const responseData = await response.json();

    if (response.status >= 400) {
      if (responseData.title === "Member Exists") {
        return res.status(400).json({ error: "You are already subscribed." });
      }
      return res
        .status(400)
        .json({ error: "There was an error subscribing to the newsletter." });
    }

    return res.status(201).json({ message: "Success!" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "There was an error subscribing to the newsletter." });
  }
}
