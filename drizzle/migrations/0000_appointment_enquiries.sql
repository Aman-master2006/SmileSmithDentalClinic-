CREATE TABLE public.appointment_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  treatment text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.appointment_enquiries TO anon, authenticated;
GRANT ALL ON public.appointment_enquiries TO service_role;

ALTER TABLE public.appointment_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an appointment enquiry"
  ON public.appointment_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);