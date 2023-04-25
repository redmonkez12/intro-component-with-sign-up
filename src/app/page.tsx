"use client";
import { useState } from "react";
import Image from "next/image";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Home() {
    const [disabled, setDisabled] = useState(false);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    });

    function onSubmit(e: React.MouseEvent<HTMLFormElement>) {
        const errors = { ...formErrors };

        e.preventDefault();
        Object.entries(form).forEach(([key, value]) => {
            if (key === "email" && !emailRegex.test(value)) {
                errors[key] = true;
            } else {
                // @ts-ignore
                errors[key] = !value;
            }
        });

        setFormErrors(errors);
    }

    return (
        <main
            className={"px-6 pt-20 pb-16 bg-[url('/images/bg-intro-mobile.png')] md:bg-[url('/images/bg-intro-desktop.png')] h-full bg-cover bg-red flex flex-col md:flex-row md:gap-11 items-center justify-center"}>
            <div className={"text-white flex flex-col gap-4 md:gap-6 text-center max-w-[32.813rem]"}>
                <h1 className={"text-2xl md:text-5xl font-bold px-6 md:px-0 md:text-left"}>Learn to code by watching
                    others</h1>

                <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
                    understanding how developers think is invaluable. </p>
            </div>

            <div className={"max-w-[32.813rem] w-full"}>
                <div className={`pricing rounded-lg mt-16 bg-purple text-white text-[0.938rem]
                md:gap-1
                py-4 flex flex-col md:flex-row justify-center md:justify-center items-center box-shadow mb-6`}>
                    <div className={"w-full md:w-auto flex justify-center"}>
                        <div className={"font-bold"}>Try it free 7 days</div>
                        <div>&nbsp;then</div>
                    </div>
                    <div>$20/mo. thereafter</div>
                </div>

                <form className={"bg-white box-shadow rounded-lg p-6 flex flex-col gap-2"} onSubmit={onSubmit}>
                    <div className={"flex flex-col gap-4 md:gap-6"}>
                        <div className={"flex flex-col gap-[0.375rem] relative"}>
                            <input
                                className={`text-base font-semibold focus:outline-none w-full border border-grayLight pl-5 pr-20 py-4 rounded-md h-[3.5rem] text-black ${formErrors.firstName ? "border-red error focus:border-red" : ""}`}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({
                                    ...form,
                                    firstName: e.target.value
                                })}
                                type="text"
                                placeholder={"First Name"}/>
                            {formErrors.firstName && (
                                <>
                                    <div className={"text-red text-right font-medium"}>First Name cannot be empty</div>
                                    <Image className={"right-[2rem] absolute error"} src={"/images/error.svg"}
                                           width={24} height={24} alt={"error"}/>
                                </>
                            )
                            }
                        </div>

                        <div className={"flex flex-col gap-[0.375rem] relative"}>
                            <input
                                className={`text-base font-semibold focus:outline-none w-full border border-grayLight pl-5 pr-20 py-4 rounded-md h-[3.5rem] text-black ${formErrors.lastName ? "border-red error focus:border-red" : ""}`}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({
                                    ...form,
                                    lastName: e.target.value
                                })}
                                type="text"
                                placeholder={"Last Name"}/>
                            {formErrors.lastName && (
                                <>
                                    <div className={"text-red text-right font-medium"}>Last name cannot be empty</div>
                                    <Image className={"right-[2rem] absolute error"} src={"/images/error.svg"}
                                           width={24} height={24} alt={"error"}/>
                                </>
                            )}
                        </div>

                        <div className={"flex flex-col gap-[0.375rem] relative"}>
                            <input
                                className={`text-base font-semibold focus:outline-none w-full border border-grayLight pl-5 pr-10 py-4 rounded-md h-[3.5rem] text-black ${formErrors.email ? "border-red error focus:border-red text-red" : ""}`}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({
                                    ...form,
                                    email: e.target.value
                                })}
                                type="text"
                                placeholder={"Email Address"}/>
                            {formErrors.email && (
                                <>
                                    <div className={"text-red text-right font-medium"}>{form.email ? "Email is invalid" : "Email cannot be empty"}</div>
                                    <Image className={"right-[2rem] absolute error"} src={"/images/error.svg"}
                                           width={24} height={24} alt={"error"}/>
                                </>
                            )}
                        </div>

                        <div className={"flex flex-col gap-[0.375rem] relative"}>
                            <input
                                className={`text-base font-semibold focus:outline-none relative w-full border border-grayLight pl-5 pr-10 py-4 rounded-md h-[3.5rem] text-black ${formErrors.password ? "border-red error focus:border-red" : ""}`}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({
                                    ...form,
                                    password: e.target.value
                                })}
                                type="text"
                                placeholder={"Password"}/>
                            {formErrors.password && (
                                <>
                                    <div className={"text-red text-right font-medium"}>Password cannot be empty</div>
                                    <Image className={"right-[2rem] absolute error"} src={"/images/error.svg"}
                                           width={24} height={24} alt={"error"}/>
                                </>
                            )}
                        </div>

                        <button className={"bg-green hover:bg-greenLight py-4 rounded-md h-[3.5rem]"}
                                type={"submit"}
                        >CLAIM YOUR FREE TRIAL
                        </button>
                    </div>
                    <div className={"text-gray px-4"}>
                        <div>
                            By clicking the button, you are agreeing to our <span className={"text-red"}>Terms and Services</span>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}
