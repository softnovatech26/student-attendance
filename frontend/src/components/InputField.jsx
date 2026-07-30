import PropTypes from "prop-types";
export default function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="space-y-2 group">

      {/* Label */}
      <label
        htmlFor={name}
        className="
          block
          text-sm
          font-medium
          text-gray-300
          transition-colors
          duration-300
          group-focus-within:text-red-400
        "
      >
        {label}
      </label>


      {/* Input */}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={
          type !== "date"
            ? `Enter ${label}`
            : "Select date"
        }

        className="
          w-full

          rounded-xl

          border
          border-white/10

          bg-white/5

          backdrop-blur-md

          px-4
          py-3.5

          text-white

          placeholder:text-gray-500

          outline-none

          transition-all
          duration-300

          hover:border-white/20

          focus:border-red-500

          focus:ring-4
          focus:ring-red-500/20

          focus:bg-white/10

          shadow-inner

          [color-scheme:dark]
        "
      />

    </div>
  );
}
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};