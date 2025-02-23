import React from "react";

export default function extractSubComponents<T extends Record<keyof T, React.ReactNode | null>>(
    props: any[],
    componentMap: Record<keyof T, React.ElementType>
): Partial<T> {
    let components = Object.fromEntries(
        Object.keys(componentMap).map(key => [key, null])
    ) as Partial<T>;

    Object.keys(componentMap).forEach((key) => {
        const componentKey = key as keyof T;
        components[componentKey] = props.find(
            (child: any) =>
                React.isValidElement(child) && child.type === componentMap[componentKey]
        ) ?? null;
    });

    return components;
}