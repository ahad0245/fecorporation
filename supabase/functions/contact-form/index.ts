// supabase/functions/contact-form/index.ts

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend"; // Import the Resend library from NPM

// Define CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Initialize Resend with your API key from the environment variables
const resend = new Resend(Deno.env.get("sendemail") ?? "");

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Safely parse the request body for form data
    const { name, email, message } = await req.json();

    // Use Resend to send the email
    const { data, error } = await resend.emails.send({
      // IMPORTANT: This "from" address must be from your verified Resend domain
      from: "Contact Form <inquiries@fecorporation.ca>",
      
      // This is the email address where you want to receive the messages
      to: ["abdulahad@i8is.com"],
      
      subject: `New message from ${name}`,
      
      html: `<p>You have a new contact form submission from:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
             
      // Pro-tip: This lets you hit "Reply" in your email client to reply directly to the user
      reply_to: email, 
    });

    // Handle potential errors from the email sending service
    if (error) {
      // Re-throw the error to be caught by the main catch block
      throw new Error(JSON.stringify(error));
    }

    // Return a success response to the frontend
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle any errors that occur during the process
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, // Internal Server Error
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});