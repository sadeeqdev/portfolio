// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SMTPClient } from 'emailjs'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {email}=req.body;
 // console.log(process.env)
 
 const client = new SMTPClient({
   user: process.env.mail,
   password: process.env.password,
   host: 'smtp.gmail.com',
   ssl:true
 });
 
 try{
  
client.send({
    text: `Just for testing purpose`,
    from: 'sadeeq1710@gmail.com',
    to: email,
    subject: 'testing emailjs',
    
    }, (err, message) => {
		res.send(err || message);
	} )
}catch(e){
   res.status(400).end(JSON.stringify({ message:"Error" }))
   return;
 }
 res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}
