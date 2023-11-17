import { ReactNode } from "react";

import { cls } from "@/helpers";

type Props = {
  type: "button" | "submit" | "reset";
  className?: string;
  label: string | ReactNode;
  icon?: string;
  iconWrapperClassName?: string;
  onClick?: () => any;
  isLoading?: boolean;
  disabled?: boolean;
};

export default function Btn(props: Props) {
  return (
    <button
      type={props.type}
      className={cls(
        "btn btn-primary min-w-[120px] relative capitalize text-base",
        props.className,
        {
          "justify-start": props.icon,
        },
      )}
      disabled={props.isLoading || props.disabled}
      onClick={props.onClick}
    >
      <span>
        {props.label}{" "}
        {!props.icon && props.isLoading && (
          <span className="loading loading-ring"></span>
        )}
      </span>
      {/* if there is icon  */}
      {props.icon && (
        <span
          className={cls(
            "absolute inset-[4px] start-auto w-[38px] rounded-full inline-flex items-center justify-center text-lg bg-white/20",
            props.iconWrapperClassName,
          )}
        >
          {props.isLoading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <i className={cls("icon", props.icon)}></i>
          )}
        </span>
      )}
    </button>
  );
}
