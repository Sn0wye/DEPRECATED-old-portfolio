import React, { useLayoutEffect, useState } from "react";
import "./portfolio.scss";
import { supabase } from "../../services/supabase-config";

type PortfolioData = {
  id: string;
  image: string;
  title: string;
  github: string;
  demo: string;
};

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData[] | null>(
    null
  );

  async function fetchPortfolioData() {
    try {
      const { data, error } = await supabase.from("Portfolio").select("*");
      if (error) throw error;
      setPortfolioData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useLayoutEffect(() => {
    fetchPortfolioData();
  }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData &&
          portfolioData.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    aria-label="Open GitHub repository"
                    href={github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    aria-label="Open live demo"
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Portfolio;
