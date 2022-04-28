import Head from "next/head";
import { useState } from "react";

const AddBlog: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const titleHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response: Response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("POST: ", data);
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <Head>
        <title>ADD Blog</title>
      </Head>
      <div className="container border ">
        <form>
          <label htmlFor="title" className="ms-1  row mt-3 ">
            Title:
          </label>
          <input
            id="title"
            className="ms-1 mt-3 align-item-center row "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <label htmlFor="dec" className="ms-1  row mt-3 ">
            Description:
          </label>
          <input
            id="dec"
            className="ms-1 mt-3 align-item-center row "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
          <button className="mt-2 btn btn-primary" onClick={titleHandler}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default AddBlog;
