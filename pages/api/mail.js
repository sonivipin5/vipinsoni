import nodemailer from 'nodemailer'
export default async function handler(req, res) {
  if (req.method === 'POST') {

    const { name, email, subject, message } = req.body


    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
       
      },
    });

    try {
      await transporter.sendMail({
        from: 'mnode98@gmail.com',
        to: "sonivipin5@gmail.com",
        subject: `Contact form submitted by ${name}`,
        html: `<div style='width:100%;'>
                  <div style='margin:auto; width:80%; text-align:center;  '>
                      <h1>New Message By ${name}</h1>
                      <div style="border:2px solid ; text-align:start; padding:20px ">
                        <p><strong>Subject: </strong> ${subject}</p>
                        <p><strong>Email: </strong> ${email}</p>
                        <p><strong>Message: </strong> ${message}</p>
                      </div>
                  </div>
               </div>
             
              `
      });
      res.status(200).send('Message Send Successful')
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
    //   return res.status(200).json({ error: "" });

  } else {

    res.send('method not allow')
  }
}