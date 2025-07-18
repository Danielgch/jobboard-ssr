/* eslint-disable jsx-a11y/label-has-associated-control */
import { ActionFunction, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

type ActionResponse = {
  success?: boolean;
  error?: string;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const message = formData.get("message");

  if (!name || !message) {
    return json({ error: "All fields are required." }, { status: 400 });
  }

  return json({ success: true });
};

export default function Contact() {
  const actionData = useActionData<ActionResponse>();

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      {actionData?.success && (
        <p className="text-green-600 mb-4">Thanks for your message!</p>
      )}
      <Form method="post" className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            name="name"
            type="text"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            className="w-full border px-3 py-2 rounded"
            rows={4}
            required
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
        {actionData?.error && (
          <p className="text-red-500 text-sm">{actionData.error}</p>
        )}
      </Form>
    </div>
  );
}