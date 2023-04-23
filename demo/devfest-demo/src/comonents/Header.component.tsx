import './Header.component.scss';

function Header() {
    return <>
        <header>
            <h1>{import.meta.env.VITE_TITLE_APP}</h1>
            <p>
            {import.meta.env.PROD ? 'developpment' : ''}
            </p>
        </header>
    </>;
}

export default Header;