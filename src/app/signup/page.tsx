export default function SignUp() {
  return (
    <form>
      <div className="mb-2">
        <label htmlFor="text_input" className="text-subtitle text-gray-dark">
          Username
        </label>
      </div>
      <input
        type="text"
        name="text_input"
        placeholder="placeholder text"
        className="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
      />

      <div className="mb-2">
        <label htmlFor="text_input" className="text-subtitle text-gray-dark">
          Email
        </label>
      </div>
      <input
        type="text"
        name="text_input"
        placeholder="placeholder text"
        className="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
      />

      <div className="mb-2">
        <label htmlFor="text_input" className="text-subtitle text-gray-dark">
          Password
        </label>
      </div>
      <input
        type="text"
        name="text_input"
        placeholder="placeholder text"
        className="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
      />
      <label htmlFor="ageCheck">Are you under the age of 13?</label>
      <input type="checkbox" id="ageCheck" value="Yes" />
    </form>
  );
}
