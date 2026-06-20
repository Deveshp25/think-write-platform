export type ApiFormResponse = {
  ok: boolean;
  message: string;
  errors: Record<string, string>;
};

export const initialFormResponse: ApiFormResponse = {
  ok: false,
  message: "",
  errors: {},
};

export async function submitJsonForm(
  endpoint: string,
  formData: FormData,
): Promise<ApiFormResponse> {
  const payload = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => null)) as ApiFormResponse | null;

    if (!data) {
      return {
        ok: false,
        message: "Something went wrong. Please try again.",
        errors: {},
      };
    }

    return data;
  } catch {
    return {
      ok: false,
      message: "We could not submit the form. Please check your connection and try again.",
      errors: {},
    };
  }
}
