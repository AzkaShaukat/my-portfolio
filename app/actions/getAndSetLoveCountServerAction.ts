"use server";

export async function getLoveCountServerAction() {
  return {
    success: true,
    count: 42,
  };
}

export async function setLoveCountServerAction() {
  return {
    success: true,
    count: 43,
  };
}
