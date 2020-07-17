export const htmlTemplate = (token: string, name: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <h2>
        Hi ${name},
      </h2>

      You are receiving this because you (or someone else) have requested the reset of password. <br /> <br />
    
      Please click on the link or paste it on your browser to complete the process: <br />
      <a href='http://localhost:3333/auth/reset?token=${token}'>
        http://localhost:3333/auth/reset?token=${token}
      </a> <br /> <br />
    
      If you did not request this, ignore this email. Your password will still the same.
    </body>
  </html>

`
}
