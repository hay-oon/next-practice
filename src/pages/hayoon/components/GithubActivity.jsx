import { useState, useEffect } from "react";
import styles from "./Components.module.css";

export default function GithubActivity() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubActivity = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/hay-oon/events"
        );
        const data = await response.json();
        setActivity(data[0]);
      } catch (error) {
        console.error("GitHub 활동을 가져오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubActivity();

    const interval = setInterval(fetchGithubActivity, 900000);
    return () => clearInterval(interval);
  }, []);

  const getActivityMessage = (activity) => {
    switch (activity?.type) {
      case "PushEvent":
        return "코드를 푸시했습니다";
      case "CreateEvent":
        return "새 저장소를 만들었습니다";
      case "PullRequestEvent":
        return "PR을 생성했습니다";
      default:
        return "활동이 있었습니다";
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.devInfoItem}>
      <h4>Github Activity</h4>
      <p className={styles.interSectionSubtitle}>
        Username : {activity?.actor?.login}
        <br />
        Action : {getActivityMessage(activity)}
        <br />
        Time : {new Date(activity?.created_at).toLocaleString()}
      </p>
      <a
        href="https://github.com/hay-oon"
        className={styles.interSectionLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="data:image/png;base64,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"
          style={{ width: "100px" }}
        />
      </a>
    </div>
  );
}
