import { ReactComponentElement } from "react";
import PostListItem from "./post-list-item/PostListItem";
import { PostListProps } from './types';

const PostList = ({ posts }: PostListProps) => {

  let output: ReactComponentElement<typeof PostListItem>[] = [];
  let postTitle: string = '';
  let postExcerpt: string = '';
  posts.map((post) => {
    //Workarround para convertir objeto para pasar solo el string (el key rendered parece que peta)
    postTitle=post.title.rendered;
    postExcerpt=post.excerpt.rendered;
    return output.push(
      <PostListItem 
        key={post.id} 
        title={postTitle} 
        excerpt={postExcerpt} />
    );
})

  return (
    <div className="post-list">
        {output}
    </div>
  );
};  
export default PostList;

