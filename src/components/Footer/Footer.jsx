import { FooterCont, Link } from './Footer.styled';

export const Footer = () => {
  return (
    <footer>
      <FooterCont>
        {new Date().getFullYear()} {'Copyright © developed by '}{' '}
        <Link href="https://github.com/OlexTS">Olexandr Tsapuk</Link>
      </FooterCont>
    </footer>
  );
};
