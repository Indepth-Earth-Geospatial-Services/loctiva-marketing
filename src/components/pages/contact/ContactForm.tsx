'use client';

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { contactInterests } from './contact.data';

interface FormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormValues, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialValues: FormValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  interest: contactInterests[0],
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your work email.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!values.company.trim()) errors.company = 'Please enter your company name.';
  if (!values.message.trim()) errors.message = 'Tell us a bit about what you need.';
  return errors;
}

function CheckIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2.5} className='h-5 w-5'>
      <path d='M5 13l4 4L19 7' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' className='h-4 w-4 animate-spin'>
      <circle cx='12' cy='12' r='9' stroke='currentColor' strokeWidth='2.5' className='opacity-25' />
      <path d='M21 12a9 9 0 0 0-9-9' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' />
    </svg>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className='flex flex-col gap-2'>
      <span className='font-inter text-sm font-medium text-t-primary'>{label}</span>
      {children}
      {error ? <span className='font-inter text-xs text-red-600'>{error}</span> : null}
    </label>
  );
}

function inputClass(hasError?: boolean) {
  return cn(
    'w-full rounded-[10px] border bg-bg px-4 py-3 font-inter text-[15px] text-t-primary placeholder:text-t-faint transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-blue/15',
    hasError ? 'border-red-400 focus:border-red-400' : 'border-border focus:border-blue',
  );
}

/**
 * Full client-side validation, loading state, and success/error
 * notification banners. Submits to `/api/contact`, a placeholder route
 * that validates and logs but doesn't deliver anywhere yet (see that
 * route's docstring) — swap in a real backend there when ready; this
 * form doesn't need to change.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [submitError, setSubmitError] = useState('');

  const update =
    (field: keyof FormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus('submitting');
    setSubmitError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? 'Something went wrong. Please try again.');
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className='py-6 text-center'>
        <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue/10 text-blue'>
          <CheckIcon />
        </div>
        <h3 className='mb-2 font-geist text-xl font-semibold text-t-bright'>Message sent</h3>
        <p className='font-inter text-[15px] text-t-muted'>
          Thanks for reaching out our team will follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-5'>
      <div className='grid gap-5 sm:grid-cols-2'>
        <Field label='Full name' error={errors.name}>
          <input
            type='text'
            value={values.name}
            onChange={update('name')}
            placeholder='Jane Doe'
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label='Work email' error={errors.email}>
          <input
            type='email'
            value={values.email}
            onChange={update('email')}
            placeholder='jane@company.com'
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <div className='grid gap-5 sm:grid-cols-2'>
        <Field label='Company' error={errors.company}>
          <input
            type='text'
            value={values.company}
            onChange={update('company')}
            placeholder='Company name'
            className={inputClass(!!errors.company)}
          />
        </Field>
        <Field label='Phone (optional)'>
          <input
            type='tel'
            value={values.phone}
            onChange={update('phone')}
            placeholder='+1 (555) 000-0000'
            className={inputClass()}
          />
        </Field>
      </div>

      <Field label="What are you interested in?">
        <select value={values.interest} onChange={update('interest')} className={inputClass()}>
          {contactInterests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </Field>

      <Field label='Message' error={errors.message}>
        <textarea
          rows={5}
          value={values.message}
          onChange={update('message')}
          placeholder="Tell us about your sites, sensors, and what you're looking to solve."
          className={cn(inputClass(!!errors.message), 'resize-none')}
        />
      </Field>

      {status === 'error' && (
        <div className='rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 font-inter text-sm text-red-700'>
          {submitError}
        </div>
      )}

      <Button
        type='submit'
        variant='solid'
        disabled={status === 'submitting'}
        className={cn(
          'justify-center gap-2',
          status === 'submitting' && 'cursor-not-allowed opacity-60',
        )}
      >
        {status === 'submitting' && <SpinnerIcon />}
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
