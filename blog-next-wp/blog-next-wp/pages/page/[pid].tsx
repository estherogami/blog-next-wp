import { GetStaticProps } from 'next';
import { Fragment } from 'react';
//import { Post } from '@/components/post-list/types';
import PostList from '@/components/post-list/PostList';
import { getPosts, PostsResponse } from '@/utils/api-request';
import Paginate from '@/components/paginate/paginate';


export default function Home( props: PostsResponse ) {
  const {posts, totalPages} = props;

  return (
   <Fragment>
    {/* @ts-ignore */}
      <PostList posts={posts}/> 
      <Paginate numPages={totalPages} />
   </Fragment>
  )
}

 export const getStaticPaths = async () => {
   const response: PostsResponse = await getPosts();
   const totalPages =response.totalPages;

   const paths = Array.from({ length: totalPages }, (_, i) => `/page/${i + 1}`);
   return { paths, fallback: true };
 };


export const getStaticProps: GetStaticProps = async (context) => {
  let pageNumber: number = 1;
  if (context.params && context.params.pid) {
    pageNumber = Number(context.params.pid);
  }
  const response: PostsResponse = await getPosts(pageNumber);

  return {
    // Passed to the page component as props
    props: { posts: response.posts, totalPages: response.totalPages },
    revalidate: 86400 //1 day
  }
}