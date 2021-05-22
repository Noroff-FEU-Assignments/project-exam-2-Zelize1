import React from 'react';
import { useForm } from 'react-hook-form';
import Heading from "../layout/Heading";
import SignupOptions from "./SignupOptions";

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>

    <Heading title="Meld deg på nå!" />

    <form onSubmit={handleSubmit(onSubmit)} className="form-row">
      <select {...register("Velg kurs", { required: true })} className="form-control">
        <SignupOptions />
      </select>
      <input type="text" placeholder="Fullt navn" className="form-control"{...register("Fullt navn", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" className="form-control"{...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

      <button type="submit" className="button" size="lg" block>
                Send inn
            </button>
    </form>
    </>
  );
}