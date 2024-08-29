import type { FunctionComponentElement, ReactElement, ReactNode } from "react";
import { createElement } from "react";
import { isElement } from "react-is";

const TARGET = "__paragraph";
const MAX_DEPTH = 8;

export const unwrapElements = (node: ReactNode, depth = Infinity): ReactNode => {

    if (depth < 0) return node;
    if (depth !== Infinity) depth--;

    /** An edge node. */
    if (typeof node === "string" || typeof node === "number") return node;

    /**
     * If the node itself is an array of elements then, we'll
     * go through it first.
     */
    if (Array.isArray(node)) {
        const elements = [];
        for (const child of node as ReactElement[]) {
            if ((child as FunctionComponentElement<any>)?.type.displayName === "p") {
                elements.push(unwrapElements(child, depth));
                console.log((child as FunctionComponentElement<any>)?.type);
            } else {
                if (isElement(child) && child?.props?.children) {
                    const inner = unwrapElements(child.props.children, depth);
                    /**
                     * Handoff the children back by creating the parent
                     * element once again. {@code inner} is a polymorphic
                     * value, where it can either be an {@link Array} or
                     * {@link ReactNode} or {@link ReactComponentElement}
                     */
                    elements.push(
                        createElement(child.type, {
                            ...child.props,
                            key: elements.length,
                        }, inner),
                    );
                } else {
                    elements.push(child);
                }
            }
        }
        return elements;
    }

    /** Catch react components and forward refs. */
    if (isElement(node) && (node as FunctionComponentElement<any>)?.type?.displayName === TARGET) {
        return unwrapElements((node as FunctionComponentElement<any>).props.children, depth);
    }

    return node;

};

/**
 * For some reason when wrapping paragraphs in custom react components
 * (say I have a paragraph as FancyParagraph) inside MDX markup, XDM wraps
 * it using the registry {@link P} node if its indented using prettier
 * or any type of formatting. This violates the HTML markup (<p> tags cannot
 * contain <p>). So, we have one extra node being wrapped inside out
 * {@code <FancyParagraph>}. We explicitly wrap its children
 * with this method to avoid the unintended tag.
 *
 * {@see https://github.com/wooorm/xdm/issues/47}
 * {@see https://github.com/wooorm/xdm/issues/42}
 * {@see https://github.com/wooorm/xdm/issues/38}
 *
 * @param node {ReactNode} children of the target.
 */
export const avoidParagraphTag = (node: ReactNode): ReactNode => {
    return unwrapElements(node, MAX_DEPTH);
};
