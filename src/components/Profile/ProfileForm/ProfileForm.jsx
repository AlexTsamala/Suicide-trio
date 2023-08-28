import Styles from "./ProfileForm.module.css";
import { useForm } from "react-hook-form";

const ProfileForm = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
        <div className={Styles.container}>
          <div className={Styles.main}>
            {/* FirstName */}
            <div className={Styles.all_input}>
              <div className={Styles.firstName_input_box}>
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
                        message: "Can’t be empty",
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
              {/* LastName */}
              <div className={Styles.lastName_input_box}>
                <label htmlFor="lastName" className={Styles.label}>
                  Last name*
                </label>
                <div className={Styles.lastName_input_content}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="e.g. Appleseed"
                    className={Styles.input}
                    value={lastName}
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Can’t be empty",
                      },
                    })}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <p className={Styles.error_message}>
                    {errors.lastName?.message}
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className={Styles.email_input_box}>
                <label htmlFor="email" className={Styles.label}>
                  Email
                </label>
                <div className={Styles.email_input_content}>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="e.g. email@example.com"
                    className={Styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.btn}>
          <button
            className={Styles.save_button}
            onSubmit={handleSubmit(onSubmit)}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
