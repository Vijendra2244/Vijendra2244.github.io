import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "./Github.module.css";
function Github() {
  return (
    <>
      <h1 className={styles.githubHeading}>Github State</h1>
      <div className={styles.gitCalender}>
        <GitHubCalendar
          className="react-activity-calendar"
          username="Vijendra2244"
        />
      </div>
      <div className={styles.gitContainer}>
        <div className={styles.stateCard}>
        <img
      id="github-stats-card"
      width="100%"
      src="https://github-readme-stats.vercel.app/api?username=Vijendra2244&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=fbb400&text_color=white&icon_color=fbb400"
    />
        </div>
        <div className={styles.stateCard}>
          <img
            id="github-streak-stats"
            width="100%"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Vijendra2244&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=fbb400&ring=fbb400&fire=white&currStreakLabel=fbb400&currStreakNum=white"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Github;
