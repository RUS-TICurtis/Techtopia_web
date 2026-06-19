CREATE TABLE public.client_projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    phase TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'On Track',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.client_slas (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    uptime NUMERIC NOT NULL DEFAULT 99.98,
    avg_response_time TEXT NOT NULL DEFAULT '15m'
);

-- RLS policies for client_projects
ALTER TABLE public.client_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own projects" ON public.client_projects FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own projects" ON public.client_projects FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own projects" ON public.client_projects FOR UPDATE USING (auth.uid() = user_id);

-- RLS policies for client_slas
ALTER TABLE public.client_slas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own SLAs" ON public.client_slas FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own SLAs" ON public.client_slas FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own SLAs" ON public.client_slas FOR UPDATE USING (auth.uid() = user_id);
