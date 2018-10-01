using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;
using System.Text;

public partial class _Default : Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        /*string firstNameVal = firstName.Value;
        string lastNameVal = lastName.Value;
        string emailIdVal = emailId.Value;
        string companyNameVal = companyName.Value;
        string phNoVal = phNo.Value;
        string jobDescVal = jobDesc.Value;

        MailMessage mailMessage = new System.Net.Mail.MailMessage();
        mailMessage.To.Add(emailIdVal);
        mailMessage.Subject = "Order Confirmation";
        mailMessage.Body = "Thank you" + firstNameVal+ "for reaching me out!!! " +

            "We have received your order!!!";

        using (var smtpClient = new SmtpClient())
        {
            smtpClient.Send(mailMessage);
        }*/
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        Response.Redirect("default.aspx");
    }
}