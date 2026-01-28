'use server';

import { revalidatePath } from 'next/cache';

// Server Action to trigger revalidation
export async function refreshData() {
  console.log('Refreshing data...');
  revalidatePath('/');
}
