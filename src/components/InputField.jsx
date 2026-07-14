// export default function InputField({label, name, type="text"}) {

//   return (
//     <div className="mb-4">

//       <label className="block mb-1 font-semibold">
//         {label}
//       </label>

//       <input
//         type={type}
//         name={name}
//         className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-600/10 file:text-red-500 hover:file:bg-red-600/20 file:transition-all file:duration-300 cursor-pointer focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-red-500/30 group-hover:shadow-lg group-hover:shadow-red-500/5"
                    
//         placeholder={`Enter ${label}`}
//       />

//     </div>
//   );
// }






export default function InputField({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm mb-1 text-gray-300">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-lg bg-black/30 border border-white/10 text-white"
      />
    </div>
  );
}