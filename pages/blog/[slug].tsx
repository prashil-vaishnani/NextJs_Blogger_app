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
  const res: Response = await fetch("http://localhost:3000/api/hello");
  const blogs: BlogType = await res.json();
  const blogger = blogs.filter(
    (blog: { id: string | string[] | undefined }) => blog.id === id
  );

  return {
    props: { blogger },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: Response = await fetch("http://localhost:3000/api/hello");
  const blogs: BlogType = await res.json();

  const paths = blogs.map((blog: { id: string }) => {
    return { params: { slug: blog.id } };
  });
  return { paths, fallback: false };
};
