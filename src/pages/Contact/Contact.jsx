import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

    const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

    return (
        <div className="has-background-grey section">
            <div className="hero is-fullheight colmuns">
                <form onSubmit={handleSubmit(onSubmit)} className="column is-two-thirds is-offset-2">
                    <h1 className="has-text-centered has-text-white title">Give me a ring!</h1>

                    <div className="field">
                        <label className="label has-text-black">Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter your name here"
                                {...register("name", { required: true, pattern: /^[A-Z ]{2,30}/i })}
                            />
                            <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                            </span>
                        </div>
                        {errors.name && <p className="help is-danger">Invalid Name</p>}
                    </div>

                    <div className="field">
                        <label className="label has-text-black">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input"
                                type="email"
                                placeholder="example@email.com"
                                {...register("email", { required: true, pattern: /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i})}
                            />
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        {errors.email && <p className='help is-danger'>Invalid email</p>}
                    </div>

                    <div className="field">
                        <label className="label has-text-black">Message</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                placeholder="Your message here :)"
                                {...register("message", {required: true})}
                            ></textarea>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;