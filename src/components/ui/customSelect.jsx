export default function CustomSelect({ children }) {
    return (
        <select className="bg-stone-700 p-1 text-white rounded ml-4 my-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
            {children}
        </select>
    )
}
