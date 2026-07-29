import { NextResponse } from 'next/server';

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  phone?: string;
  interest: string;
  message: string;
}

const REQUIRED_FIELDS: (keyof ContactPayload)[] = ['name', 'email', 'company', 'interest', 'message'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * PLACEHOLDER endpoint — validates the submission and logs it, but does
 * NOT deliver it anywhere yet (no email/CRM service is configured). This
 * lets the contact form be fully testable end-to-end (loading, success,
 * and error states all work for real) without any backend infrastructure.
 *
 * Before relying on this in production, replace the body below the
 * validation block with a real integration — e.g. an email service
 * (Resend, SendGrid, Postmark) or a CRM webhook — using credentials from
 * environment variables, never hardcoded here.
 */
export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !payload[field]?.toString().trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required field(s): ${missing.join(', ')}.` },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(payload.email!.trim())) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  // TODO: wire up real delivery (email service or CRM webhook) here.
  console.log('[contact] New submission (not yet delivered anywhere):', payload);

  return NextResponse.json({ ok: true });
}
