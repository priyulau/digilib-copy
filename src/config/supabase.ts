//adding in plug&play backend
//npm installing dependency (supabase package library to allow for plug&play like authorization)

import {createClient} from "@supabase/supabase-js";

//got this from supabase > project > settings > API > service_role (admin pw)
const SUPABASE_KEY : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhyd2x4YnhycGNueXh2eGJ3eXFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Nzc4OTYwNiwiZXhwIjoyMDAzMzY1NjA2fQ.lZh2BKCSd2MG4eWkYKlO35CdEhgeqT0dxH23GYSzNVo";

//got this from supabase > project > settings > API > project URL
const SUPABASE_URL : "https://hrwlxbxrpcnyxvxbwyqr.supabase.co";

//type in const supabase : createCl... then should autocomplete
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export {SUPABASE_KEY, SUPABASE_URL, supabase}

