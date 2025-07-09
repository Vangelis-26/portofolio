export default function Input({ label, id, type = "text", className, ...props }) {

    const inputClasses = "bg-stone-700 border border-stone-600 text-white p-2 rounded-md w-full focus:ring-2 focus:ring-(--color-border) focus:border--color-border outline-none transition-all duration-200";

    return (
        <div className='flex flex-col mt-2'>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                className={`${inputClasses} ${className || ''} my-1 text-xs pl-3`}
                {...props}
            />
        </div>
    );
}
