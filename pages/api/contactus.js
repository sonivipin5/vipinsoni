import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
    if(req.method === "POST"){
        const Name = req.body.name
        const email = req.body.email
        const subject = req.body.subject
        const message = req.body.message

        const contact ={
            id: new Date().toISOString(),
            Name : Name,
            email: email,
            subject: subject,
            message:message
        };
        
        // store that in a database or in a file

       const filePath= path.join(process.cwd(), 'data', 'contact.json');
        const fileData = fs.readFileSync(filePath)
        const data = JSON.parse(fileData)
        data.push(contact)
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({message:'Success',  contactInfo: contact});

    }else{
        res.status(200).json({message:"hello"})
    }
  }
  