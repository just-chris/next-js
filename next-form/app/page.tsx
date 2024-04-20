'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'

const formSchema = z.object({
  emailAddress: z.string().email(),
  password: z.string().min(3),
  passwordConfirm: z.string(),
  accountType: z.enum(['personal', 'company']),
  companyName: z.string().optional()
}).refine((data) => {
  return data.password === data.passwordConfirm 
}, {
  message: 'Passwords do not match',
  path: ['passwordConmfirm']
}).refine((data) => {
  if (data.accountType === 'company') {
    return !!data.companyName
  }
  return true
},{
  message: 'Company name is required',
  path: ['companyName']
})
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: '',
      password: '',
      passwordConfirm: '',
      companyName: '',
    }
  })

  const accountType = form.watch('accountType')

  // const handleSubmit = (values: z.infer<typeof formSchema>) => {
  //   console.log({values})
  // }



  const handleSubmit = async (values: z.infer<typeof formSchema>) => {

    try {
      formSchema.parse(values)
      console.log('Form data is valid', values)
      const url = 'https://reqres.in/api/users'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      if (!response.ok) {
        throw new Error('Submission failed')
      }
      const data = await response.json()
      console.log('Form submitted successfully', data)
      throw new Error('Form data is invalid');
      
      // Perform API call or any other necessary logic here
   } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.reduce((acc, curr) => {
          acc[curr.path.join('_')] = curr.message
          return acc
        }, {} as Record<string, string>)
        alert(`Form data is invalid: ${errors}`)
      } else {
        console.error(error)
      }
    }
    console.log({values})
  }



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='max-wd-md w-full flex flex-col gap-4'>
          <FormField control={form.control}  name='emailAddress'
          render={({ field }) =>{
            return <FormItem> 
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='Email Address...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          }} />
          <FormField control={form.control}  name='accountType'
          render={({ field }) =>{
            return <FormItem> 
              <FormLabel>Account Type</FormLabel>
              <Select onValueChange={field.onChange}>              
              <FormControl>
                <SelectTrigger >
                  <SelectValue placeholder='Account Type...' {...field} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value='personal'>Personal</SelectItem>
                <SelectItem value='company'>Company</SelectItem>
              </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          }} />
          {accountType === 'company' && (
            <FormField control={form.control}  name='companyName'
            render={({ field }) =>{
              return <FormItem> 
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='Company Name...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            }} />
          )}
          <FormField control={form.control}  name='password'
          render={({ field }) =>{
            return <FormItem> 
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='Password...' {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          }} />
          <FormField control={form.control}  name='passwordConfirm'
          render={({ field }) =>{
            return <FormItem> 
              <FormLabel>Password Confirm</FormLabel>
              <FormControl>
                <Input type='password' placeholder='Password Confirm...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          }} />
          <Button type='submit' className='w-full'>Submit</Button>
        </form>
      </Form>
    </main>
  );
}
