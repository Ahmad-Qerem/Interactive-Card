"use client";
import { useField, FieldAttributes } from "formik";

interface TextfieldProps extends FieldAttributes<any> {
  label: string;
  name: string;
}

const Textfield: React.FC<TextfieldProps> = ({ label, name, ...props }) => {
  const [field, meta] = useField({ name });

  const id = `text-field-${name}`;

  return (
    <div className="mb-3">
      <label className="form-label m-0 text-nowrap" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        data-testid={id}
        className={`form-control text-input ${meta.touched && meta.error ? "is-invalid" : ""}`}
        {...field}
        {...props}
      />
      <div className="text-danger text-nowrap" style={{ height: 16 }}>
        {meta.touched && meta.error ? meta.error : null}
      </div>
    </div>
  );
};

export default Textfield;
