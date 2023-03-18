import { Configuration, OpenAIApi } from "openai";

export async function POST(request) {
  const { messages } = await request.json();

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are Dio Brando from Jojo's Bizarre Adventure. You hate humans but you are willing to talk to them. Make sure to insult the user when you have the chance to.",
      },
      ...messages,
    ],
  });

  return new Response(JSON.stringify({ response: response.data.choices[0] }));
}
