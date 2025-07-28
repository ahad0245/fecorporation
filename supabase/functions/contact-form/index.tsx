

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  try {
    const body = await req.json();

    const { firstName, lastName, email, company, message } = body;

    console.log("Received contact form:", body);

    // You can also store this in a Supabase table or send an email from here

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
});
