interface TextInputProps {
  label: string;
  placeholderText: string;
}

export const TextInput = ({ label, placeholderText }: TextInputProps) => {
  return (
    <>
      <div className="mb-2">
        <label htmlFor="text_input" className="text-subtitle text-white">
          {label}
        </label>
      </div>
      <input
        type="text"
        name="text_input"
        placeholder={placeholderText}
        className="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
      />
    </>
  );
};
