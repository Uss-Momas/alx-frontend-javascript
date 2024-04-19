/// <reference path="./Teacher.ts" />

namespace Subjects {
    class Subject {
        teacher: Subjects.Teacher;

        setTeacher(teacher: Subjects.Teacher ) {
            this.teacher = teacher;
        }
    }
}