import Styles from "./ProfileForm.module.css";
import { useForm } from "react-hook-form";

const ProfileForm = ({ firstName, setFirstName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.main}>
          <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
            <div className={Styles.firstName_input_box}>
              {/* FirstName */}
              <label htmlFor="firstName" className={Styles.label}>
                First Name*
              </label>
              <div className={Styles.firstName_input_content}>
                <input
                  type="text"
                  placeholder="e.g. John"
                  value={firstName}
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "Username is required",
                    },
                  })}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={Styles.input}
                />
                <p className={Styles.error_message}>
                  {errors.firstName?.message}
                </p>
              </div>
            </div>
            <div className={Styles.firstName_input_box}>
              {/* LastName */}
              <label htmlFor="lastName" className={Styles.label}>
                Last name*
              </label>
              <input
                type="text"
                placeholder="e.g. Appleseed"
                className={Styles.input}
                {...register("lastName")}
              />
            </div>
            <div className={Styles.firstName_input_box}>
              {/* Email */}
              <label htmlFor="email" className={Styles.label}>
                Email
              </label>
              <input
                type="text"
                placeholder="e.g. email@example.com"
                className={Styles.input}
                {...register("email")}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
