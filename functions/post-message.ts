import { db } from "../db/client";
import { APIGatewayProxyEvent } from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent) {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { user_id, content } = body;

    if (!user_id || !content) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "user_id and content are required" })
      };
    }

    await db.query("INSERT INTO messages (user_id, content) VALUES ($1, $2)", [
      user_id,
      content
    ]);

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Message saved successfully" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
}
