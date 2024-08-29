import type { ReactNode } from "react";
import type { ElixirServiceCategory } from "./enums.ts";

export type ElixirService = {
    name: string;
    description: ReactNode;
    imageUrl?: string;
    category: ElixirServiceCategory[];
};
