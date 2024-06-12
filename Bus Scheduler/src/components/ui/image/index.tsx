type ImageProps = {
    srcUrl: string;
    altText: string;
};

const Image = ({ srcUrl, altText }: ImageProps) => {
    return (
        <div className="image-container">
            <img src={srcUrl} alt={altText}></img>
        </div>
    );
};

export default Image;
