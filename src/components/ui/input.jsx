export default function Input({ label, id, type = "text", className, ...props }) {

    const inputClasses = "bg-stone-700 border border-stone-600 text-white p-2 rounded-md w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200";

    return (
        <div className='flex items-center my-2'>
            <label htmlFor={id} className='w-1/4'>
                {label}
            </label>
            <input
                type={type}
                className={`${inputClasses} ${className || ''} w-3/4 my-1 text-xs pl-3`}
                {...props}
            />
        </div>
    );
}
