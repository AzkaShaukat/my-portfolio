'use server';

export async function getViewsServerAction() {
  return {
    success: true,
    message: 1337,
  };
}

export async function setViewsServerAction() {
  return {
    success: true,
    message: 'Views set successfully',
  };
}
