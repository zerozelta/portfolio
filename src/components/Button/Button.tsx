import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
    children: React.ReactNode;
    icon:any;
}

const Button = ({ children, icon }: ButtonProps) => {
    return (
        <div className='flex flex-row gap-2 text-xl text-slate-600 rounded-md px-8 py-2 cursor-pointer items-center justify-center'>
            <FontAwesomeIcon icon={icon} style={{ width: 25, height: 25 }} />
            <div>{children}</div>
        </div>
    );
}

export default Button;