-- Function to increment the count of "regex_generations"
CREATE OR REPLACE FUNCTION increment_count()
RETURNS void AS $$
BEGIN
  UPDATE regex_generations
  SET count = count + 1
  WHERE id = 42;
END;
$$ LANGUAGE plpgsql;
