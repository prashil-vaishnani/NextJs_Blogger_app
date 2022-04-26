import Link from "next/link";

import * as blogs from "../../blog_details.json";

const Blog = () => {
  return (
    <div className="container border ">
      <div className="mt-1">
        <h4 className="py-1">Blog List</h4>
        <ul>
          {blogs.map((blog) => {
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
  );
};
export default Blog;
