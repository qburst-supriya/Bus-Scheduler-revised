import '@/components/ui/link/style.scss';

type LinkProps = {
    text?: string;
    url: string;
    children?: React.ReactNode | undefined;
};
const Link = ({ text, url, children }: LinkProps) => {
    return (
        <a href={url}>
            {text} {children && children}
        </a>
    );
};

export default Link;
