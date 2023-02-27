import Link from "next/link";
import parse from 'html-react-parser';

const PostListItem = ({ title, excerpt}: any) => {
   //Convertir string a elemento dom compatible con react

    //que tipo es esta variable
    const parsedExcerpt = parse(excerpt);

  return (
    <div className="post-list-item">
        <a>
          <h2>{title}</h2>
        </a>
        {parsedExcerpt}
    </div>
  );
};

export default PostListItem;