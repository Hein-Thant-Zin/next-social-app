'use client'
import {useForm} from 'react-hook-form'
import { Button } from './ui/button';
import { SignInButton } from './buttons';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect } from 'react';
import UserBio from '@/app/dashboard/UserBio';


export default function FormComponent() {

    const { register, handleSubmit,formState : {errors} } = useForm();
    
    function onSubmit(formData) {
      console.log(formData);
      fetch('', {
        body : formData,
      })
    }


  return (
    
    <article className='max-w-lg mx-auto mt-6 text-center border shadow'>
      
      <h1 className='p-3 text-lg font-semibold'>Form handling</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className=''>
                  <label className='p-2 text-center pr-9' htmlFor="name">Name</label>
                  <input className='p-2 border rounded' {...register('name', {
                      required: true,
                      minLength : 5,
                  })} type="text" name='name' />
          
        </div>
        <div className='pt-1'>{errors.name && <span className='ml-10 text-red-600'>This field is required</span>}</div>
        
        <div className='mt-3'>
                  <label className='p-2' htmlFor="password">Password</label>
                  <input className='p-2 border rounded' {...register('password', {
                      required: true,
                      minLength: 5,
                      maxLength : 10
                  })} type="password" name='password' />
        </div>
         <div className='pt-1'>{errors.name && <span className='ml-10 text-red-600'>This field is required</span>}</div>
        
        <div className='mt-3'>
                  <label className='p-2 mr-10' htmlFor="age">Age</label>
                  <input defaultValue={<UserBio />} className='p-2 border rounded' {...register('age', {
                      required: true,
                    min: {
                      value: 18,
                      message : 'Age must be older than 18'
                      },
                    max: {
                      value: 25,
                      message : 'Age must not be older than 25'
                      }
                  })} type="number" name='age' />
        </div>
        <div className='pt-1'>{errors.name && <span className='ml-10 text-red-600'>{ errors.age.message ?? 'This field is required' }</span>}</div>

        
        <div className="flex justify-center mt-3">
                  <Button type="submit">Save</Button>
                  {/* <button type="button">Cancel</button> */}
        </div>
        
          </form>   
      {/* <Button />Save */}
      <div className='my-2'>
            <Sheet>
  <SheetTrigger>Open Sheet</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you sure absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
      </Sheet>
        </div>
      

      

  
    </article>
  )
}
