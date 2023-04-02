import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { isValidEmail } from '../../utils/validation';
import { CreateUser } from '../../services/backend';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
export default function 
() {

const dispatch = useDispatch()
const {control, setValue, handleSubmit} = useForm<any>({mode: 'all'});

const onSubmit = async (data: any) => {
    if (!data || !data.name) {
      console.log('Name required.');
      return;
    }
    if (data.email && !isValidEmail(data.email)) {
        console.log('Invalid email.');
      return;
    }

    //dispatch(loadingUpdate(true));
    try {
      await CreateUser({name: data.name, email: data.email, password:data.password,phone: data.phone, image: data.image});
     // dispatch(loadingUpdate(false));
      //dispatch(userRegLogState({value: 1, phone: data.phone}));
    } catch (err: any) {
      //dispatch(loadingUpdate(false));
      let msg = 'Not able to signup.';
      if (err?.response?.status === 400) {
        msg = err?.response?.data?.message || msg;
      }
      console.log(msg);
    }
  };


  return (
    <div className='container'>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
                <Controller
                name="name"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <input
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    maxLength={100}
                    type="text" className="form-control" id="name" name='name' placeholder="Your name"
                    />
                )}
                />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
                <Controller
                name="email"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <input
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    maxLength={100}
                    type="email" className="form-control" id="email" name='email' placeholder="email.."
                    />
                )}
                />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
                <Controller
                name="password"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <input
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    maxLength={104}
                    type="password" className="form-control" id="password" name='password' placeholder="password.."
                    />
                )}
                />
        </div>            
        <div className="form-group">
            <label htmlFor="cpassword">Confirm Password</label>
                <Controller
                name="cpassword"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <input
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    maxLength={140}
                    type="password" className="form-control" id="cpassword" name='cpassword' placeholder="confirm password.."
                    />
                )}
                />
        </div> 
        <div className="form-group">
            <label htmlFor="phone">Phone</label>
                <Controller
                name="phone"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <input
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    maxLength={100}
                    type="text" className="form-control" id="phone" name='phone' placeholder="phone number.."
                    />
                )}
                />
        </div>           
        <div className="form-group">
            <label htmlFor="image">Image</label>
                <Controller
                name="image"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <input
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    maxLength={10}
                    type="text" className="form-control" id="image" name='image' placeholder="image link.."
                    />
                )}
                />
        </div>           
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
