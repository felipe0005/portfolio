// hooks/usePortfolioData.js
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ypngmgqblcpuqchrjftc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwbmdtZ3FibGNwdXFjaHJqZnRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NjQ3NDksImV4cCI6MjA3MjI0MDc0OX0.vAwEicvnHW4ZL8nrm90GuB50Qp3i0JEfQeC90btWLlk"
);

export const usePortfolioData = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);

        // Fetch personal info
        const { data: personalData, error: personalError } = await supabase
          .from("personal_info")
          .select("*")
          .single();

        if (personalError) throw personalError;

        // Fetch skills
        const { data: skillsData, error: skillsError } = await supabase
          .from("skills")
          .select("*")
          .order("level", { ascending: false });

        if (skillsError) throw skillsError;

        // Fetch projects
        const { data: projectsData, error: projectsError } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });

        if (projectsError) throw projectsError;

        setPersonalInfo(personalData);
        setSkills(skillsData || []);
        setProjects(projectsData || []);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching portfolio data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  return { personalInfo, skills, projects, loading, error };
};
