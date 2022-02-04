const FormItem = ({label, htmlFor, children}) => (
    <div className="flex flex-col space-y-2 w-full">
        <label htmlFor={htmlFor}
               className="uppercase text-sm text-gray-500 font-bold">{label}</label>
        {children}
    </div>
);

export default FormItem;
