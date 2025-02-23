import React from "react";

export default function Error (props: { children: React.ReactNode }) {
    return (
        <small className="text-red-500">
            {props.children}
        </small>
    )
}