<<<<<<< HEAD
import React from 'react'

const EditProfile = () => {
  return (
    <div>EditProfile</div>
  )
}

=======
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, DateInput, Dropdown, Input } from '../../../ui';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const options = [
  { value: 'option1', display: 'Personal usage' },
  { value: 'option2', display: 'Buisness usage' },
  { value: 'option3', display: 'Explore' },
  { value: 'option4', display: 'Emergency need' },
  { value: 'option5', display: 'Option 5' },
  { value: 'option6', display: 'Option 6' },
  { value: 'option7', display: 'Option 7' },
  { value: 'option8', display: 'Option 8' },
  { value: 'option9', display: 'Option 9' },
  { value: 'option10', display: 'Option 10' },
  { value: 'option11', display: 'Option 11' },
];


const schema = z.object({
  name: z.string().min(3).max(50).optional(),
  email: z.string().email().optional(),
  dob: z.object({
    day: z.string().refine((day) => {
      const numericDay = parseInt(day, 10);
      return numericDay >= 1 && numericDay <= 31;
    }, { message: "Day should be between 1 and 31" }),
    month: z.string().refine((month) => {
      const numericMonth = parseInt(month, 10);
      return numericMonth >= 1 && numericMonth <= 12;
    }, { message: "Month should be between 1 and 12" }),
    year: z.string().refine((year) => {
      const numericYear = parseInt(year, 10);
      return numericYear >= 1900 && numericYear <= 2100;
    }, { message: "Year should be between 1900 and 2100" }),
  }),

});

const EditProfile = () => {

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: 'Initial Name',
      email: 'initial@email.com',
      dob: {
        day: '01',
        month: '01',
        year: '2000',}
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <div className='w-[100%] px-10'>
      <h1 className='font-playfair text-2xl text-textPrimary'>Account Details</h1>
      <form
        className='md:pt-6 pt-4 flex flex-col flex-grow'
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name */}
        <Input
          type="name"
          label="Name"
          register={register}
          errors={errors}
        />

        <Input
          type="email"
          label="Email"
          register={register}
          errors={errors}
          placeholder="Enter your email"
        />

        {/* BirthDate */}
        <DateInput
          day={getValues("dob.day", "")} 
          month={getValues("dob.month", "")}
          year={getValues("dob.year", "")}
          onDayChange={(value) => setValue("dob.day", value)}
          onMonthChange={(value) => setValue("dob.month", value)}
          onYearChange={(value) => setValue("dob.year", value)}
          getValues={getValues}
          label={"BirthDate"}
          register={register}
          setValue={setValue}
          errors={errors}
        />

        <Dropdown
          options={options}
          selectedValue={getValues("selectedOption")}
          onValueChange={(value) => setValue("selectedOption", value)}
          placeholder="Personal usage"
          label="I'm here for"
        />

        <Button variant="primary" type="submit">
          Save
        </Button>
      </form>
    </div>
  )
}
>>>>>>> 0a0292987e4fde52af314a1c2153ef60b9aca7b9
export default EditProfile