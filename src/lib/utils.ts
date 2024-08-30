export const slugToTitleCase = (slug: string) => slug
    .toLowerCase()
    .split(/[-_.\s]/)
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join(' ');

export const sortStringsByLength = (strings: string[]): string[] => {
    return strings.sort((a, b) => a.length - b.length);
};

export const classNames = (...classes): string => {
    return classes.filter(Boolean).join(' ')
}
