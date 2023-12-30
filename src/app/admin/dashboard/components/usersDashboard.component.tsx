import Image from "next/image";
import styles from "@/styles/dashboard.module.sass";

const UsersDashboard = (props: any) => {
  return (
    <div id={styles.trainingLessons}>
      <div className={styles.lessonTaken}>
        <div className={styles.lessonInfo}>
          <Image
            src="/dashboard/content/lesson-image-generic.jpg"
            alt="Lesson Image"
            width="50"
            height="50"
          />
          <div>
            <h4>{props.data.username}</h4>
            <p>{props.data.email}</p>
          </div>
        </div>
        <div className={styles.lessonCompleted}>
          <p>Completed</p>
        </div>
      </div>
    </div>
  );
};

export default UsersDashboard;
