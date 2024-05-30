import '@/components/atoms/link/style.scss';

type LinkType = {
    text?: string;
    url: string;
    children?: React.ReactNode | undefined;
};
const Link = ({ text, url, children }: LinkType) => {
    return (
        <a href={url}>
            {text} {children && children}
        </a>
    );
};

export default Link;
