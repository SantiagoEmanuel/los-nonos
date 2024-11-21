import mailjet from "node-mailjet";

export async function POST({ request }) {
  const { name, email, message } = await request.json();
  console.log({ name, email, message });

  const mailjetClient = mailjet.apiConnect(
    import.meta.env.PUBLIC_KEY,
    import.meta.env.PUBLIC_SECRET
  );

  const response = mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "santiagomustafa3@gmail.com",
          Name: "Santiago Emanuel Mustafa Font",
        },
        To: [
          {
            Email: "minecraftenolimpocraft@gmail.com",
            Name: "Santiago Mustafa",
          },
        ],
        Subject: "CONSULTA POR CAMPO LOS NONOS",
        TextPart: "CONSULTA",
        HTMLPart: `
    
      <div
         style="background-color:#cccccc;"
      >
        
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
      ></div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:8px;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:8px;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
      ><h1>Consulta por campo "Los Nonos"<h1></div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <p
         style="border-top:solid 4px orange;font-size:1px;margin:0px auto;width:100%;"
      >
      </p>
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px orange;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
    
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <div
         style="font-family:arial;font-size:16px;font-weight:400;line-height:1.35;text-align:left;color:#555555;"
      ><p>Estimada <span style="font-weight: bold;">Gladys Font</span>, espero que te encuentres bien.</p>
          <p style="text-wrap:balance; line-height:1.6rem;"><span style="font-weight: bold;">${name}</span> ha consultado por información del campo, su correo de contacto es <span style="font-weight: bold;">${email}</span></p>
          <p>Este es el mensaje que ha dejado:</p>
          <p style="text-wrap:balance;">${message}</p></div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#555555;"
      ><p style="text-wrap: balance; text-align: left;"> Muchas gracias, saludos. </p></div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <p
         style="border-top:solid 4px orange;font-size:1px;margin:0px auto;width:100%;"
      >
      </p>
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px orange;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
    
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
      >
        <tbody>
          <tr>
            <td  style="width:100px;">
              
      <img
         height="auto" src="https://ci3.googleusercontent.com/mail-sig/AIorK4wo8iIUE1oAdmDBZszIbl9Q1PsGvMYDr1XAVXnE3XvKMv5d2X3rSrvNVHAnczDfu2hW80UM2Y4_47DL" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100"
      />
    
            </td>
          </tr>
        </tbody>
      </table>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
      ><p style="opacity: .6; font-weight: 600; font-family: arial">Santiago Emanuel Mustafa Font</p></div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      
     <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
              <table
                 align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"
              >
                <tbody>
                  
      <tr
        
      >
        <td  style="padding:4px;vertical-align:middle;">
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;border-radius:3px;width:20px;"
          >
            <tbody>
              <tr>
                <td  style="font-size:0;height:20px;vertical-align:middle;width:20px;">
                  <a  href="https://github.com/santiagoemanuel" target="_blank">
                    <img
                       height="20" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/github.png" style="border-radius:3px;display:block;" width="20"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        
          <td  style="vertical-align:middle;">
            <a
                 href="https://github.com/santiagoemanuel" style="color:#333333;font-size:13px;font-family:Ubuntu, Helvetica, Arial, sans-serif;line-height:22px;text-decoration:none;" target="_blank">
              Github
            </a>
          </td>
          
      </tr>
    
                </tbody>
              </table>
            <!--[if mso | IE]></td><td><![endif]-->
              <table
                 align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"
              >
                <tbody>
                  
      <tr
        
      >
        <td  style="padding:4px;vertical-align:middle;">
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#0077b5;border-radius:3px;width:20px;"
          >
            <tbody>
              <tr>
                <td  style="font-size:0;height:20px;vertical-align:middle;width:20px;">
                  <a  href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.linkedin.com/in/santiagoemanuelmustafafont/&title=&summary=&source=" target="_blank">
                    <img
                       height="20" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png" style="border-radius:3px;display:block;" width="20"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        
          <td  style="vertical-align:middle;">
            <a
                 href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.linkedin.com/in/santiagoemanuelmustafafont/&title=&summary=&source=" style="color:#333333;font-size:13px;font-family:Ubuntu, Helvetica, Arial, sans-serif;line-height:22px;text-decoration:none;" target="_blank">
              LinkedIn
            </a>
          </td>
          
      </tr>
    
                </tbody>
              </table>
            <!--[if mso | IE]></td></tr></table><![endif]-->
    
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><![endif]-->
    
    
      </div>
  
            `,
      },
    ],
  });

  return new Response(JSON.stringify({ success: true, response }), {
    status: 200,
  });
}
