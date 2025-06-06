type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id: string;
};

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <label htmlFor={id} className="flex flex-row gap-[10px] w-full font-medium">
      {label && <span>{label}</span>}
      <input
        id={id}
        className="flex-[1_1_200px] p-2.5 text-base border border-gray-300 rounded-lg bg-gray-100
          transition-colors focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        {...props}
      />
    </label>
  );
};

export default Input;