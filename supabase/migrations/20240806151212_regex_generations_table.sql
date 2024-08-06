-- Create table for regex_generations
CREATE TABLE regex_generations (
  id INT PRIMARY KEY DEFAULT 42,
  count INT NOT NULL DEFAULT 0
);

-- Insert initial value
INSERT INTO regex_generations (count) VALUES (0);

-- Enable realtime
ALTER publication supabase_realtime ADD TABLE regex_generations;

-- Enable RLS and add permissions
ALTER TABLE regex_generations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access to all users" ON "public"."regex_generations" AS permissive
  FOR SELECT TO public USING (true);

CREATE POLICY "Enable update access to anon role (API)" ON "public"."regex_generations" AS permissive
  FOR UPDATE TO anon USING (true);
