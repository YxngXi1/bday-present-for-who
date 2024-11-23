import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Supabase setup
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  // Fetch the current counter value
  const { data, error } = await supabase
    .from('counters')
    .select('count')
    .eq('id', 'universal-heart')
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ count: data.count });
}

export async function POST() {
  try {
    const { data, error } = await supabase.rpc('increment_counter', {
      id_param: 'universal-heart',
      increment_by: 1,
    });

    if (error) {
      console.error('RPC Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Ensure the response structure contains 'count'
    return NextResponse.json({ count: data[0].new_count }); // Assuming data[0].new_count holds the updated count
  } catch (e) {
    console.error('Unhandled Error:', e);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}