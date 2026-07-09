export default function InputField({label, name, type="text"}) {

  return (
    <div className="mb-4">

      <label className="block mb-1 font-semibold">
        {label}
      </label>

      <input
        type={type}
        name={name}
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Enter ${label}`}
      />

    </div>
  );
}