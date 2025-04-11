import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export default function Select(props: SelectProps) {
  return (
    <select
      {...props}
      className="
        min-h-8 w-full bg-transparent
        focus:outline-none focus:ring-0 peer
        appearance-none
      "
    />
  );
}