-- Newsletter subscribers table
CREATE TABLE public.newsletter_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    subscribed_at TIMESTAMPTZ DEFAULT NOW(),
    source TEXT DEFAULT 'footer'
);

-- RLS: Allow public inserts (anyone can subscribe); no reads from client
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public newsletter subscribe" ON public.newsletter_subscribers
    FOR INSERT WITH CHECK (true);
