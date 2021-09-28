import {  ChangeEvent, FC, useEffect, useState } from 'react';
import { Form } from '../components-ui/Form';
import { InputLabelWrapper, Label, Input } from '../components-ui/Input';
import { TCustomer } from './Interfaces';

export const Customers:FC = ():JSX.Element => {
  const [customers, setCustomers] = useState<TCustomer[]>([])
  const [editCustomer, setEditCustomer] = useState<TCustomer>({id:0, firstName:''})
  const [inputText, setInputText] = useState('')

  const inputTextHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value)
  }

  const addCustomer = () => {
    setCustomers(() => [...customers, {firstName: inputText, id: Math.floor(Math.random()*1000)}]);
    setInputText('')
  };

  const updateCustomer = (customerId: number, newCustomerValue:any) => {
    setCustomers((prev) => prev.map(item => (item.id === customerId ? newCustomerValue : item)))
  };

  const deleteCustomer = (id:number) => setCustomers(customers.filter(customer => customer.id !== id))


  // if(editCustomer.id) {
  //   return(
  //     <Input onChange={inputTextHandler}/>
  //   )
  // }
    
  const customerList = () => 
    customers.map(customer => { 
      return (
      <li key={customer.id} onClick={() => updateCustomer(customer.id, customer.firstName)}>
        {customer.firstName}
        <button onClick={() => deleteCustomer(customer.id)}>X</button>
      </li>
      )
    })

  useEffect(() => {
    console.log(customers)
  }, [customers])

  return (
    <>
    <Form>
        <InputLabelWrapper>
          <Label>New customer</Label>
          <Input placeholder={'Name'} value={inputText} onChange={inputTextHandler}/>
        </InputLabelWrapper>
        </Form>
      <button disabled={inputText.length < 3} onClick={addCustomer}>Add Customer</button>
      <ul>
       {customerList()}
      </ul>
    </>
    )
  }
