import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href={{ pathname: '/template/1', query: { id: 'id-ligastavok', title: 'Лига ставок' } }} as={`/review/ligastavok/`}>
            <a style={linkStyle}>Обзор</a>
        </Link>
        <Link href={{ pathname: '/template/2', query: { id: 'id-ligastavok', title: 'Лига ставок' } }} as={`/news/ligastavok/`}>
            <a style={linkStyle}>Новость</a>
        </Link>
    </div>
);

export default Header;