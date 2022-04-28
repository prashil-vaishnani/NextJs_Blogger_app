import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

//import { default as blogs } from "../../blog_details.json";
type Data = { id: string; title: string; description: string }[];

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<Data>([]);
  const fetchBlog = async () => {
    const response: Response = await fetch("/api/hello");
    const data: Data = await response.json();
    console.log(data);
    setBlogs(data);
  };
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <div className="container border ">
        <div className="mt-1">
          <h4 className="py-1">Blog List</h4>
          <div>
            {" "}
            <button onClick={fetchBlog}>Get the latest blogs</button>
          </div>
          <ul>
            {(blogs as Data).map((blog) => {
              return (
                <li key={blog.id} className="p-2 ">
                  <strong>
                    <Link href={`/blog/${blog.id}`} passHref>
                      {blog.title}
                    </Link>
                  </strong>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Blog;
