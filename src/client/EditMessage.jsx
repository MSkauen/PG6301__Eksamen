import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { LoadingView } from "./LoadingView";
import { InputField } from "./InputField";
import { ErrorView } from "./ErrorView";
import { useLoading } from "./useLoading";

function EditMessageForm({ message }) {
  const [subject, setSubject] = useState(message.subject);
  const [content, setContent] = useState(message.content);
  const [date, setDate] = useState(message.date);

  async function submit(e) {
    e.preventDefault();
    console.log("Submitting", { subject, content, date });
    await fetch(`/api/messages/${message.id}`, {
      method: "PUT",
      body: JSON.stringify({ subject, content, date }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <form onSubmit={submit}>
      <h1>Edit an existing message ({subject})</h1>
      <InputField
        label={"Subject"}
        value={subject}
        onChangeValue={setSubject}
      />
      <InputField
        label={"Content"}
        value={content}
        onChangeValue={setContent}
      />
      <InputField
        label={"Date"}
        value={date}
        onChangeValue={setDate}
        type="date"
      />
      <button>Submit</button>
    </form>
  );
}

export function EditMessage({ messageApi }) {
  const { loading, error, data, reload } = useLoading(async () => {
    let id = new URLSearchParams(location.search).get("id");
    return await messageApi.getMessage(id);
  });

  if (error) {
    return <ErrorView error={error} reload={reload()} />;
  }

  if (loading || !data) {
    return <LoadingView />;
  }

  return <EditMessageForm message={data} />;
}
