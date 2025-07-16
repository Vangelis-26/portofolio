export default function CustomSelect({ children, id, name, className, ...props }) {

    const selectClasses = "text-sm bg-stone-700 p-2 rounded-md my-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200";

    return (
        <select
            id={id}
            name={name}
            className={`${selectClasses} ${className || ''}`}
            {...props}
        >
            {children}
        </select>
    );
}
