import {forwardRef} from "react";

const FormInput = forwardRef(
  (
    {children, type, placeholder, onChange, onBlur, name, label, error},
    ref
  ) => {
    const errorClassLabel = error
      ? "block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
      : "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300";

    const errorClassInput = error
      ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full";
    return (
      <div className="mb-6">
        <label htmlFor="password" className={errorClassLabel}>
          {label}
        </label>
        <input
          className={errorClassInput}
          required=""
          ref={ref}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {children}
      </div>
    );
  }
);
export default FormInput;
