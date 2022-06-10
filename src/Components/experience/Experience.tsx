import React, { useLayoutEffect } from "react";
import "./experience.scss";
import { BsPatchCheckFill } from "react-icons/bs";
import { supabase } from "../../services/supabase-config";
import { useState } from "react";

type ExperienceData = {
  id: string;
  name: string;
  description: string;
}[];

const Experience = () => {
  const [frontendData, setFrontendData] = useState<ExperienceData | null>(null);
  const [backendData, setBackendData] = useState<ExperienceData | null>(null);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("Frontend").select("*");
      if (error) throw error;
      setFrontendData(data);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data, error } = await supabase.from("Backend").select("*");
      if (error) throw error;
      setBackendData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="experience">
      <h5>The Skills I Have</h5>

      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendData &&
              frontendData.map((item) => (
                <article key={item.id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-light">{item.description}</small>
                  </div>
                </article>
              ))}
          </div>
        </div>
        {/*---------- END OF FRONTEND {/*----------*/}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendData &&
              backendData.map((item) => (
                <article key={item.id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-light">{item.description}</small>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
