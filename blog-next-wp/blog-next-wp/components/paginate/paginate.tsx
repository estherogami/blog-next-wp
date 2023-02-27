import Link from 'next/link';
import { useRouter } from 'next/router';


const Paginate = ({numPages}:any) => {
    const router = useRouter();
    const totalPages: number = Number(numPages);
    let page= router.query.pid ? router.query.pid : 1;

    return (
        <div className="paginate">
            {page > 1 ? <Link href={`/page/${Number(page) - 1}`} passHref legacyBehavior>
                <a className="paginate__prev">Previous</a>
            </Link>: null}
            {page < totalPages ? <Link href={`/page/${Number(page) + 1}`} passHref legacyBehavior>
                <a className="paginate__next">Next</a>
            </Link>: null }
        </div>
    );
    };

export default Paginate;