import React, { useState } from "react";
import Editor from "@/components/Editor";
import axios from "axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const CreatePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("cover", files[0]);

    const response = await axios({
      method: "post",
      url: "http://localhost:5000/posts",
      data,
    });
    if (response.ok) {
      console.log("Post Created");
    }
  };

  return (
    <form onSubmit={CreatePost}>
      <div>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="summary"
          placeholder={"Summary"}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>
      <div>
        <input
          type="file"
          onChange={(e) => setFiles(e.target.files)}
          enctype="multipart/form-data"
        />
      </div>
      <Editor value={content} onChange={setContent} />
      <div>
        <button style={{ marginTop: "5px" }}>Create post</button>
      </div>
    </form>
  );
};

export default CreateBlog;
