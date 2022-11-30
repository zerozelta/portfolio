import classNames from "classnames";

type RoundedButtonProps = {
  size: number;
  dark?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const RoundedButton = (props: RoundedButtonProps) => {
  let { children, className, dark, ...btnProps } = props;
  return (
    <div
      className={classNames(
        "flex flex-col justify-center items-center rounded-[50%] overflow-hidden ripple",
        className,
        { dark }
      )}
      style={{ width: props.size, height: props.size }}
      {...btnProps}
    >
      {children}
    </div>
  );
};

export default RoundedButton;
