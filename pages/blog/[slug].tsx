import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
interface Blogger {
  blogger: BlogType;
}

type BlogType = {
  id: string;
  title: string;
  description: string;
}[];

const BlogId: NextPage<Blogger> = (blogger) => {
  return (
    <>
      <Head>
        <title>{blogger.blogger[0].title}</title>
      </Head>
      <div className="container border ">
        <div className=" pt-5 fs-3 fw-bold">{blogger.blogger[0].title}</div>
        <div className="pb-5">{blogger.blogger[0].description}</div>
        <Link href="/blog">Back</Link>
      </div>
    </>
  );
};
export default BlogId;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.slug;
  const blogs = (await import("../../blog_details.json")).default;
  const blogger = blogs.filter((blog) => blog.id === id);

  return {
    props: { blogger },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import("../../blog_details.json")).default;
  const paths = blogs.map((blog) => {
    return { params: { slug: blog.id } };
  });
  return { paths, fallback: false };
};
