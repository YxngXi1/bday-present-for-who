import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch the current counter value
    const { data, error } = await supabase
      .from('counters')
      .select('count')
      .eq('id', 'universal-heart')
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ count: data.count });
  }

  if (req.method === 'POST') {
    // Increment the counter
    const { data, error } = await supabase
      .from('counters')
      .update({ count: supabase.raw('count + 1') })
      .eq('id', 'universal-heart')
      .select('count')
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ count: data.count });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}