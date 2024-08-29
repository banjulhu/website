import type { ReactNode } from "react";

export type Filter = {
    text: ReactNode;
    description: ReactNode;
    predicate: () => boolean;
};

export type FloatingFilterProps = {
    filters?: Array<Filter>;
    onFilterChange: (filter: Filter) => void;
};

export type ElixirNorwayOrganizations = "UIB" | "UIT" | "UIO" | "NMBU" | "NTNU";

export type PersonCardProps = {
    name: string;
    title?: string;
    organization: ElixirNorwayOrganizations;
    photo: string;
}
