export default function LinkWithFigure({ href, logoSrc, altText, linkText }) {
    return (
        <a
            href={href}
            className="flex flex-col items-center  p-4 hover:scale-105 transition duration-300"
        >
            <img
                src={logoSrc}
                alt={altText}
                className="w-auto object-cover mb-4"
            />
            <span className="text-sm text-blue-600 sr-only">{linkText}</span>
        </a>
    );
}