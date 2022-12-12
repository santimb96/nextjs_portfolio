import React, { useEffect, useState } from "react";
import getApiData from "../../src/utils/apiData";
import styles from "./Skills.module.css";
const Skills = () => {
  const [skills, setSkills] = useState({});
  const [error, setError] = useState(null);

  const getData = () => getApiData("/api/skillAPI");

  useEffect(() => {
    getData()
      .then((data) => setSkills(data))
      .catch((err) => setError(err));
  }, []);
  return (
    <div className={styles.prueba}>
      {error ? error?.message : skills?.frontend}
    </div>
  );
};

export default Skills;
