import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../ui/Button";
import { instantCallApiCall } from "@/services/services";

// Validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup.number().required("Phone Number is Required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

interface FormValues {
  name: string;
  email: string;
  phone: number;
  subject: string;
  message: string;
}

const FooterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    instantCallApiCall(data);
    reset(); // Reset the form after submission
  };

  return (
    <div className="w-full lg:w-12/12 md:w-10/12">
      <h1 className="text-3xl font-bold text-white">
        Contact Us for a <span className="text-OMblue">Quote</span>
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 mt-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Enter your name"
            className="lg:w-8/12 w-full h-10 border-2 border-white rounded-md p-2 outline-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your Email"
            className="lg:w-8/12 w-full h-10 border-2 border-white rounded-md p-2 outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-white">
            Your Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="Enter your Phone"
            className="lg:w-8/12 w-full h-10 border-2 border-white rounded-md p-2 outline-none"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-white">
            Subject
          </label>
          <select
            id="subject"
            {...register("subject")}
            className="lg:w-8/12 w-full h-10 border-2 border-white rounded-md p-2 outline-none bg-white text-black"
          >
            <option value="">Select a subject</option>
            <option value="career enquiry">Career Enquiry</option>
            <option value="business enquiry">Business Enquiry</option>
            <option value="no subject">No Subject</option>
          </select>
          {errors.subject && (
            <span className="text-red-500 text-sm">{errors.subject.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white">
            Your Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Enter your Message"
            className="min-h-32 max-h-32 lg:w-8/12 w-full h-10 border-2 border-white rounded-md p-2 outline-none resize-none"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message.message}</span>
          )}
        </div>

        <Button title="Send" className="self-start" type="submit" />
      </form>
    </div>
  );
};

export default FooterForm;
