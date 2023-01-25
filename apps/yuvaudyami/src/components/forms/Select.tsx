import React, { ReactElement } from "react";

interface Props {
  label: string;
  register: any;
  required: boolean;
  id: string;
  name: string;
  errors: { [x: string]: any };
}

function Select({
  label,
  register,
  required,
  id,
  name,
  errors,
}: Props): ReactElement {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-700' htmlFor={id}>
        {label}
      </label>
      <div className='mt-1'>
        <select
          name={name}
          id={id}
          className='w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600'
          {...register(name, { required })}
        >
          <option value=''>Please select</option>

          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
      </div>
      <div>
        {errors && errors[name] && (
          <p className='text-red-500'>{errors[name].message}</p>
        )}
      </div>
    </div>
  );
}

export default Select;
