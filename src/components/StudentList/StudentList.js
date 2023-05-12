import Student from "../Student/Student";
import "./StudentList.scss";
import dog1 from "../../assets/images/student.jpg";
import dog2 from "../../assets/images/student2.jpg";
import dog3 from "../../assets/images/student.jpg";

function StudentList() {
    return (
        <section className="student-list">
            <Student image={dog1} name="Dr. Puppers"/>
            <Student image={dog2} name="Wishbone" />
            <Student image={dog3} name="Evil Dr. Puppers" />
        </section>
    );
}

export default StudentList;