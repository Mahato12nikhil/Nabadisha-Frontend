import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { isValidEmail, isValidPassword } from '../../utils/validation';
import {  Login } from '../../services/backend';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { userRegLogState } from '../../redux/userSlice';

export default function 
() {

const dispatch = useDispatch()
const {control, setValue, handleSubmit} = useForm<any>({mode: 'all'});

const onSubmit = async (data: any) => {
    if (!data || !data.email) {
      console.log('Email required.');
      return;
    }
    //if (data.password ) {
    //    console.log('Enter valid password');
    //  return;
    //}

    //dispatch(loadingUpdate(true));
    try {
      await Login({ email: data.email, password:data.password});
     // dispatch(loadingUpdate(false));
      dispatch(userRegLogState({value: 1, phone: data.phone}));
    } catch (err: any) {
      //dispatch(loadingUpdate(false));
      let msg = 'Not able to login.';
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
                    maxLength={100}
                    type="text" className="form-control" id="password" name='password' placeholder="Enter password..."
                    />
                )}
                />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
