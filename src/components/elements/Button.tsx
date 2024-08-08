import { FC, ReactElement, ForwardedRef, forwardRef } from 'react';

interface IButton {
  content: string | ReactElement;
  handleFunction?: () => void;
}
type ButtonProps = IButton & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button: FC<ButtonProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLButtonElement>) => {
    const { content, handleFunction, ...rest } = props;
    return (
      <button {...rest} onClick={handleFunction} ref={ref}>
        {content}
      </button>
    );
  },
);

export default Button;
